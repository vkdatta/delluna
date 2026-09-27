export const name="image-broken-bold";
export const id="dl_397fbde81ebf4f848a00";
export const url=new URL("../icons/image-broken-bold.svg?v=b787892bace4a78abcc6f5e0b8840dc901f855c030dc1fefaf8afc35114cc4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
