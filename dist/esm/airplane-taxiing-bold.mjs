export const name="airplane-taxiing-bold";
export const id="dl_62d7903f1119439aa1f4";
export const url=new URL("../icons/airplane-taxiing-bold.svg?v=64f43b397f9c11e70cb6e89449e8eb0db0cd6451b89ad3d8d2448c29cfb1815b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
