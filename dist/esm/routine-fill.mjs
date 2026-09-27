export const name="routine-fill";
export const id="dl_8ed5daf7b61928a48ebe";
export const url=new URL("../icons/routine-fill.svg?v=68587e8cf59d4e79619118262eeb8e3e334def2c3f9c3c9098d3cd286c254ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
