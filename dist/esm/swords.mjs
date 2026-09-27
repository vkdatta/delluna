export const name="swords";
export const id="dl_9e8b1f2b6c34f44de538";
export const url=new URL("../icons/swords.svg?v=8cde74c80eaa45ed9b0e97eec125045617c53a10bf272f79ff907afd7acb9ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
