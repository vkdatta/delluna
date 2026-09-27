export const name="lock-key-bold";
export const id="dl_b516c1ce1bcb4e72ba43";
export const url=new URL("../icons/lock-key-bold.svg?v=fb4680d7195deefa66cf70fc9da3d161fcac028f796eb548bbc3e67be20553fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
