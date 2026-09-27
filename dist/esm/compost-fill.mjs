export const name="compost-fill";
export const id="dl_41c2adfab5303258d6c0";
export const url=new URL("../icons/compost-fill.svg?v=bace1cb6885eaf86821038c0f5132362b6c6fee62d15cc859ee565d86442a910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
