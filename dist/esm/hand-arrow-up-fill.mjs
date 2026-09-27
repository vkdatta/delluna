export const name="hand-arrow-up-fill";
export const id="dl_f831502755fe4d6a952a";
export const url=new URL("../icons/hand-arrow-up-fill.svg?v=ff2c25159c991de7d1e5c4da6c5ea32e980ef9e86cacc19650774f7c81425341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
