def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """

    swapped = ''

    to_swap = to_swap.lower()

    for ltr in phrase:
        if ltr.lower() == to_swap:
            ltr = ltr.swapcase()
        swapped += ltr
    
    return swapped
