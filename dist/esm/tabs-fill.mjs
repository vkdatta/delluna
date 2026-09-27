export const name="tabs-fill";
export const id="dl_b07b312a952fb955d809";
export const url=new URL("../icons/tabs-fill.svg?v=068b4d197dad9b5e39a36cdc52ccf56f5881b3d3aec653f557d0680f0a161ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
