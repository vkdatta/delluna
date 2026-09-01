export const name="play_arrow";
export const id="dl_6a1301b21605d9e20fff";
export const url=new URL("../icons/play_arrow.svg?v=ba72eb7f2ce5d444fa4ccb79079117bba6c9f0160acc0ecc8d25a87245b507f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
