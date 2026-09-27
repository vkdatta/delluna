export const name="toolbox";
export const id="dl_22d3c9c948394f25988b";
export const url=new URL("../icons/toolbox.svg?v=e2832988b4a08c29b5f0d73c87752bf20d55c2e951716d08c0dab855249efb74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
