export const name="lucid_1-brush";
export const id="dl_b9f79d7064d3489ba9a4";
export const url=new URL("../icons/lucid_1-brush.svg?v=1a181ad4e39210aa84b4873e4795b607a93585f4ac850729b4e4bcb8abd8a528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
