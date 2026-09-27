export const name="e911_avatar";
export const id="dl_a955d05b0b0a1cdc4a69";
export const url=new URL("../icons/e911_avatar.svg?v=ae1e6ad3f639b1997ef94f0a3aa381292b7e7a3b773636fbae9ed85eef057fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
