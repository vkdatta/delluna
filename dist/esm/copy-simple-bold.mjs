export const name="copy-simple-bold";
export const id="dl_61874f016e0b4577933a";
export const url=new URL("../icons/copy-simple-bold.svg?v=eebcc664b64889e7d471bd2c145055ecb62cf5ee057c5586752f16e876bc135f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
