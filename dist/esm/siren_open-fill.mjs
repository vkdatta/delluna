export const name="siren_open-fill";
export const id="dl_2fbf817322137620e42f";
export const url=new URL("../icons/siren_open-fill.svg?v=b3fd91d51bed42aa5c0b1298d2624fddb342e4f6be573bebadf307bfc2baca35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
