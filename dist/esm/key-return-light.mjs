export const name="key-return-light";
export const id="dl_f3fa02088b2148fe882d";
export const url=new URL("../icons/key-return-light.svg?v=4a2db9588cebebf3c07663f1cc2a23ed8aae4e7315cd006e2a6c5dd854d68bd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
