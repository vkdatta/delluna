export const name="plant";
export const id="dl_dbf69a59ee004f0e859a";
export const url=new URL("../icons/plant.svg?v=8601d8d2a9c360cfeb6e8e9104acdf37ac7f41304a487e52e33289a0c0bf4c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
