export const name="bookmark_star";
export const id="dl_33ce392ebfc47c394d72";
export const url=new URL("../icons/bookmark_star.svg?v=43d56b1bc1bac11a15202ae18dec458f3cc448c43a12a437ea714c617a107cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
