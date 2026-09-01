export const name="star";
export const id="dl_3eea1d58292990eebbc6";
export const url=new URL("../icons/star.svg?v=1d06d2713122ba1788e36e686b467fa1701281958ddfbccca7547698d4720670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
