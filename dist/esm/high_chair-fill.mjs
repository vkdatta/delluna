export const name="high_chair-fill";
export const id="dl_a1d62d2379cc4c6d9b9c";
export const url=new URL("../icons/H/high_chair-fill.svg?v=333da808de01444471a45ed3de2fa215bcceb7b64d1079e8ca6b576132a5f2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
