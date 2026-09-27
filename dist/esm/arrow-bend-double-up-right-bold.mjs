export const name="arrow-bend-double-up-right-bold";
export const id="dl_5aeb848cc3bc4bef8a8d";
export const url=new URL("../icons/arrow-bend-double-up-right-bold.svg?v=49a0249852d32eee012d2fc86ff2859f51194c53fa1ec89e859eb943b96844ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
