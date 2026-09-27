export const name="copy_all";
export const id="dl_19bc7e8bb418b4a44b5a";
export const url=new URL("../icons/copy_all.svg?v=3e3cc7ef76d6d5b1f55767bce20ae96483bcd164a6d1756f3013bc221edf9d09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
