#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>


int main(){
  int no_of_student;
 
 int marks[no_of_student];
 char gender[30];
 int n;
 scanf("%d", &no_of_student);
 for(n=1;n<=no_of_student;n++) {
     scanf("%d",&marks[n]);
    

 }
  scanf("%s",gender);

  printf("%s\n",gender);
  printf("%d\n",no_of_student);
  printf("%d",marks[no_of_student]);
  return 0;
}


