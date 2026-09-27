export const name="cell-signal-x";
export const id="dl_ec86504ea4a046e7941d";
export const url=new URL("../icons/cell-signal-x.svg?v=86a19ddc384db5fb23a145c161e7a6099d583a2c66e3e7e917eabec6b30c6631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
