#include <stdlib.h>
#include <stdio.h>
#include <string.h>

    struct node{
        int value;
        struct node* next;
    };

    typedef struct node node_t ;

    node_t *create_node(int value){
        node_t *result = malloc(sizeof(node_t));
        result->value = value;
        result->next = NULL;
        return  result;
    }

    // node_t *insert_at_head(node_t *head, node_t *node_to_insert){
    //     node_to_insert->next = head;
    //     return node_to_insert;

    // }

    void print_list(node_t *head){
        node_t *temp = head;
        while(temp != NULL){
            printf("%d - ", temp->value);
            temp = temp->next;
        }
        printf("\n");
    }

    // node_t *find_node(int value, node_t *head){
    //     while(head != NULL){
    //         if(head->value == value){
    //             return head;
    //         }
    //         head = head->next;
    //     }
    //     return NULL;
    // }


    int main(){
        node_t *head = NULL;
        node_t *temp;
        node_t *temp2;

        for (int i = 0; i < 25; i++){
            temp = create_node(i);
            temp->next = head;
            head = temp;
        }


        // node_t *result = find_node(-1, head);
        // printf("%d\n", result->value);


        //link them up
        print_list(head);
        return 0;
    }
