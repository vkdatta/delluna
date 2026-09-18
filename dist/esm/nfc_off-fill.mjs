export const name="nfc_off-fill";
export const id="dl_3763f2c5d2034b858faa";
export const url=new URL("../icons/nfc_off-fill.svg?v=b315f1580ac0059d8be6d2f1c65a4d95a6bad82ed94eb24ddf822aecf874da65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
