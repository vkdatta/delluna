export const name="nfc-fill";
export const id="dl_167b3ed5893d4ea9bc11";
export const url=new URL("../icons/N/nfc-fill.svg?v=c2db82eb6233688cab5f610d576141720debef3977a24b14f5c3ad9a9f62deab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
