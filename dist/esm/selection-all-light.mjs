export const name="selection-all-light";
export const id="dl_3034701d8928e6c06f9f";
export const url=new URL("../icons/selection-all-light.svg?v=c6ff648909322eea7d30122b453d02853b35a03c994cd81ed8cfe1eed8e00302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
