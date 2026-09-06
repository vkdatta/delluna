export const name="lucid_1-bell";
export const id="dl_521a72aff5d74cc5b20d";
export const url=new URL("../icons/lucid_1-bell.svg?v=6dc97020f7557ebe94859bb22aa62799d88fb12409091912cda2c2cf2d48be6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
