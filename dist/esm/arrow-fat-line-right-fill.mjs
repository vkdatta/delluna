export const name="arrow-fat-line-right-fill";
export const id="dl_423e98cfb51f4192a0a2";
export const url=new URL("../icons/arrow-fat-line-right-fill.svg?v=d6afbbb8f8cccc7188535d18d1bbd3f6f29b4c983fcc04420449c7eccc8a3273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
