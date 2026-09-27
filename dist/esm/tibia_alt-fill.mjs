export const name="tibia_alt-fill";
export const id="dl_54bd4f04db60a51fe391";
export const url=new URL("../icons/tibia_alt-fill.svg?v=408f225ae8aa5871cb2a1a75e2220884a9365768eb8f8e0c2851d2889a684a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
