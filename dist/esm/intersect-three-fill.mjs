export const name="intersect-three-fill";
export const id="dl_39866194247f48b99d34";
export const url=new URL("../icons/intersect-three-fill.svg?v=ad4769c348dc656a8ad3e03b4abd9baccd0211ce6262a65eb25f201d1ef5ec84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
