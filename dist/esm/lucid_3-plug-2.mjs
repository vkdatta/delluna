export const name="lucid_3-plug-2";
export const id="dl_4fad767c14e14fa3bb40";
export const url=new URL("../icons/lucid_3-plug-2.svg?v=a88e0ba5c30b9ff35b5870c1eb4e0554e7f0b85a2bcd8e4bd29b7d20bcdad78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
