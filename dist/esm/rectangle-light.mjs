export const name="rectangle-light";
export const id="dl_54e8dbfbb9ae486c8be2";
export const url=new URL("../icons/rectangle-light.svg?v=0ed3d8a392955396026e7a0a97d7ffdaca56423592f77e7d778d180a2de3e572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
