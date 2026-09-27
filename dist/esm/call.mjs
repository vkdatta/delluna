export const name="call";
export const id="dl_8743d02fc0bf1af46190";
export const url=new URL("../icons/call.svg?v=a511ed60592f3a53d96052e50e50bee4c769c449c7e9071ad50b1d3bb41cd985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
