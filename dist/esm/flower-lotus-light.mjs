export const name="flower-lotus-light";
export const id="dl_aaae501873d84191bc57";
export const url=new URL("../icons/flower-lotus-light.svg?v=bfff1a3b10c10b4c359ff0b5c1962133bac603e6b22e8dddd99aa7446f63f643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
