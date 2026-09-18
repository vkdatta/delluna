export const name="assistant_device-fill";
export const id="dl_20cfb9e70b89458eb764";
export const url=new URL("../icons/assistant_device-fill.svg?v=156b25031ac1b9d60993b01661539a653c8cca922fec4ffd69a1899fc4762a12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
