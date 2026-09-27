export const name="hand-pointing-fill";
export const id="dl_7340043cd5504c65b679";
export const url=new URL("../icons/hand-pointing-fill.svg?v=a01330e435d96f9dc2cdfbfa878481872eb8c166b4a7723d37f880c1e98d61d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
