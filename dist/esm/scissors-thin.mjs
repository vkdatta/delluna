export const name="scissors-thin";
export const id="dl_b282693ffc39402da371";
export const url=new URL("../icons/S/scissors-thin.svg?v=634eb84b98583f22d3bff419bd25b11b9a1131f4feec5bc61dba8a9132b0cc77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
