export const name="hard_drive-fill";
export const id="dl_6b94ba5a37754c29a1b3";
export const url=new URL("../icons/hard_drive-fill.svg?v=3b15811833bb5bedf5e292540fd11fac53fe3182f720f29a21a3d1b664f4b6b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
