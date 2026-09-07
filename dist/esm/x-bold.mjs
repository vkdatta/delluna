export const name="x-bold";
export const id="dl_4711c30015a4424ca51d";
export const url=new URL("../icons/X/x-bold.svg?v=d540487912a267d83c495954b24ca07981002fda05ee2ea0b492d8fc188d1c3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
