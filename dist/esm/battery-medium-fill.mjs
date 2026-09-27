export const name="battery-medium-fill";
export const id="dl_10a9c8e2a2cc409fb401";
export const url=new URL("../icons/battery-medium-fill.svg?v=03ffff75df44681deae491874ab3f4a3f8971019642aba1bf4489f68a38bb79f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
