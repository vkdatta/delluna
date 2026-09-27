export const name="cloud-sun-fill";
export const id="dl_e612fb07d0424181a964";
export const url=new URL("../icons/cloud-sun-fill.svg?v=2c3fa56f52f63bd0e4c0afd639c18e4e46c4c4fbba4c6043f18636b7721c952c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
