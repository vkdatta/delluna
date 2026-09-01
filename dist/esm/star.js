export const name="star";
export const id="dl_3eea1d58292990eebbc6";
export const url=new URL('../icons/star.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
