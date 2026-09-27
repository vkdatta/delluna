export const name="graph_4-fill";
export const id="dl_6076c130c29c6bc749fe";
export const url=new URL("../icons/graph_4-fill.svg?v=f47ccb8e3fd8e31b3f7697f54e0bd18a984f89b0b3bb35177518a214975bd2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
