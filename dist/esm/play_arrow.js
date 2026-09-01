export const name="play_arrow";
export const id="dl_6a1301b21605d9e20fff";
export const url=new URL('../icons/play_arrow.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
