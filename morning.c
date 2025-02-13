#include <stdio.h>
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

int main() {
    // Open shared memory block created by Python
    void *shm = mmap(NULL, 1024, PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANONYMOUS, -1, 0);

    if (shm == MAP_FAILED) {
        perror("mmap failed");
        return 1;
    }

    printf("C read: %s\n", (char *)shm); // Read initial value
    strcpy((char *)shm, "Modified by C!"); // Modify shared memory
    printf("C wrote: %s\n", (char *)shm);

    munmap(shm, 1024); // Unmap shared memory
    return 0;
}
