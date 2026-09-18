export const name="kettle-fill";
export const id="dl_e0e6f67d7ca24afe9998";
export const url=new URL("../icons/K/kettle-fill.svg?v=9b27199eb2cfddc46561ef632504454d64b9d9f8c5535ffc6bd00f52e5d6b5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
