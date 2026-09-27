export const name="fingerprint_off-fill";
export const id="dl_5f134504b447414c878c";
export const url=new URL("../icons/fingerprint_off-fill.svg?v=ca183562ff7838f1266c3dc22d81bf100a360954a5190c9e32ed2f3a06e77bdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
