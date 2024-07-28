"""Word Finder: finds random words from a dictionary."""

import random

class WordFinder:
    """Tool to find random words from a dictionary file.
    
    >>> wf = WordFinder('words.txt')
    235886 words read.
    """

    def __init__(self, path):
        """Reads file and returns len of word items read."""

        words_file = open(path)
        self.words = self.parse(words_file)
        print(f'{len(self.words)} words read.')

    def parse(self, words_file):
        """Parse words_file -> list of words."""

        return [w.strip() for w in words_file]

    def random(self):
        """Returns random word."""

        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines and comments."""

    def parse(self, words_file):
        """Parse words_file -> list of words, skipping blanks/comments."""

        return [w.strip() for w in words_file if w.strip() and not w.startswith('#')]
