export const name="museum";
export const id="dl_96cc848ed52d4bdf9167";
export const url=new URL("../icons/M/museum.svg?v=e77530ff35a843ae508d8cd9bb58694d91d13a4a0da2c1e3fc7b333e9fdb7b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
