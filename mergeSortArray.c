// #include <stdio.h>
// #include <string.h>
// #include <math.h>
// #include <stdlib.h>
// //Complete the following function.


// void merge_sorted_arr(int n, int k, ) {
//   //Write your code here.
//   int and_result = 0;
//   int or_result = 0;
//   int xor_result = 0;
//   int index_of_sub_result = 0;

//   for (int i = 1; i <= n; i++){
//     for (int j = i + 1; j <= n ; j++){
//         int and_val = i & j;
//         int or_val = i | j;
//         int xor_val = i ^ j;



//         if(and_val < and_result  &&  and_val   < k){
//             and_result = and_val;
//         }
//         if(or_val < or_result &&  or_val   < k){
//             or_result = or_val;

//         }
//         if(xor_val < xor_result  &&  xor_val   < k){
//             xor_result = xor_val;
//         }
//     }
//   }
//   printf("%d\n", and_result);
//   printf("%d\n", or_result);
//   printf("%d", xor_result);

// }

// int main() {
//     int n, k;
//     scanf("%d %d", &n, &k);
//     calculate_the_maximum(n, k);


//     return 0;
// }
