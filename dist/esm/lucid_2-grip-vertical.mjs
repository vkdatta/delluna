export const name="lucid_2-grip-vertical";
export const id="dl_445c7ebdf017410a8128";
export const url=new URL("../icons/lucid_2-grip-vertical.svg?v=48d3ecb7163a001f23ffb880fa7ea289018d0f476cb3594db74480d85d00f4d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
