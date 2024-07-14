def print_upper_words(words):
"""Prints each word uppercased"""

    for word in words:
        print(word.upper())


def print_upper_words2(words):
"""Prints each word that begins with the letter e uppercased"""

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())


def print_upper_words3(words, must_start_with):
"""Prints each word that begins with a start letter uppercased"""
    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
