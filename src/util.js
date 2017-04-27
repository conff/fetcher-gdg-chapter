class Util {

  static map(_, chapters) {
    return _.chain(chapters)
      .mapKeys((value, key) => _.camelCase(key))
      .values();
  }

  static save(_, GDG, chapters) {
    _.each(chapters, async (chapter) => {
      await GDG.findOneAndUpdate({
        gplusId: chapter.gplusId,
      }, chapter);
    });
  }

}

export default Util;
