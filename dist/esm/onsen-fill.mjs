export const name="onsen-fill";
export const id="dl_d76d0ebee4bc57cd403d";
export const url=new URL("../icons/onsen-fill.svg?v=21fb9436976da08a3f4f50db1800e124967407758d99206d860779007e692334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
