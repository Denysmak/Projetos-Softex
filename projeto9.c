int *ptr
ptr = (int *) malloc(22 * sizeof (int));
ptr = (int *) realloc(ptr , 22 * sizeof (int));
free = free(): void free(void *ptr);