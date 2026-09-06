export const name="high-definition-fill";
export const id="dl_628c0f43bda848d7bd52";
export const url=new URL("../icons/high-definition-fill.svg?v=20e7f8c1a49e5363cd9c11d1696e72caa6a9866306967e60a054a4a19e501b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
