export const name="background_replace";
export const id="dl_d100f844bbfffbf29618";
export const url=new URL("../icons/background_replace.svg?v=b1627f4f6ebd4870b34e89afaffb31818f6e9d68e182a31aa7e30097b279d2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
