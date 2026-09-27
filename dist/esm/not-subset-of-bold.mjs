export const name="not-subset-of-bold";
export const id="dl_12e32fc06b3c4f64a423";
export const url=new URL("../icons/not-subset-of-bold.svg?v=1c71e8ce95d5e2e120e7b524223bfb3328c784232e0ac01fea20f1353f74a3e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
