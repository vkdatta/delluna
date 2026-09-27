export const name="divide-bold";
export const id="dl_95823ce78f6d4304a5ee";
export const url=new URL("../icons/divide-bold.svg?v=c36a3f6669e25f76896cfb55cc43c1c63b18e33c4254a6549cdbd8e29b3a4fbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
