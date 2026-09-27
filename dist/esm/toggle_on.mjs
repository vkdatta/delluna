export const name="toggle_on";
export const id="dl_c963f931867bfba351a1";
export const url=new URL("../icons/toggle_on.svg?v=ab830fa11649d9198aa201ea4bf48b7d45661d10bdf858865142c6f137737614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
