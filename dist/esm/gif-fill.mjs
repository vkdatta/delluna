export const name="gif-fill";
export const id="dl_5272d5f761e849ec8bf0";
export const url=new URL("../icons/gif-fill.svg?v=afc4f14c7191f7e9e461e89cf3dfaff1fcd5779e6ddbbad6fd4ca7247c4d7fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
