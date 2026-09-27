export const name="horse-bold";
export const id="dl_4b0031e42f214eb9838b";
export const url=new URL("../icons/horse-bold.svg?v=7ba7ec36a7e4bf494508b4469dc25d23fe62b1f7f409d6b8cc1860f23ee5f708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
