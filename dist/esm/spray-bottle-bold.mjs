export const name="spray-bottle-bold";
export const id="dl_aa51ff0439d14695bda7";
export const url=new URL("../icons/S/spray-bottle-bold.svg?v=0b0fe69a4e3c2c71ae0e97bd51c15cc0ab73d6b853a5f04d6b464d8c0db2d27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
