#include <stdio.h>
int main(){
    int size;
    printf("%s","Enter the size of arr: ");
    scanf("%d",&size);

    int arr[size];
    printf("Enter the array of %d with white space: \n", size );
    for(int i = 0; i < size; i++){
        scanf("%d", &arr[i]);
    }
    int max;
    for(int i = 0; i < size; i++){
        if(i == 0 ){
            max = arr[i];
        }
        if( max < arr[i]){
            max = arr[i];
        }
    }
    printf("%d", max);
    return 0;
}
