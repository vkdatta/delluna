export const name="raw_off-fill";
export const id="dl_b76f6758dd92a9d0c5b2";
export const url=new URL("../icons/raw_off-fill.svg?v=aad0ef6eafbffb079cded327ef9a8f4ab750ecaae0562f709bdf4ea4a4cab138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
