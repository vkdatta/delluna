export const name="precision_manufacturing";
export const id="dl_d2837dde35cb6b39a82c";
export const url=new URL("../icons/precision_manufacturing.svg?v=a20c6aab35c92f06c9bc10deab23f64e302f5c69084646adebe2c640c0fb4b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
