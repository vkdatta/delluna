export const name="virus-duotone";
export const id="dl_721ad2bfacb44ad797e2";
export const url=new URL("../icons/V/virus-duotone.svg?v=860b2ab5ce7f45d775db665e3106cd6b7d1ece34cd3973c4631a9f8d366ffb65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
