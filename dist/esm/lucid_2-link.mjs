export const name="lucid_2-link";
export const id="dl_fdc015ec6e364204bec0";
export const url=new URL("../icons/lucid_2-link.svg?v=e8c02413a0afcb307b1f66dae69e591cf0d7a6df6f6449576e27e929829ec139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
