export const name="arrow-line-up-left-light";
export const id="dl_d30b633393b54bfd8cf2";
export const url=new URL("../icons/arrow-line-up-left-light.svg?v=ff905474bb7344d1e516462e5092a0ab3391e8ec79494996f013599268bf3191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
