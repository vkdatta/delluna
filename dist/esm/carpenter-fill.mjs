export const name="carpenter-fill";
export const id="dl_4d7c756b68454b981d1d";
export const url=new URL("../icons/carpenter-fill.svg?v=04ed7dc847f9d6216056c9493ee76ea6c4b40f0e4315a2c3001c5f906712ce4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
