export const name="bath_private-fill";
export const id="dl_7807719a37bb711fe495";
export const url=new URL("../icons/bath_private-fill.svg?v=2b0ba8cd41bbb2b97aa4cbf0af227118d577175a60f85e6ec3cbef1090c9a867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
