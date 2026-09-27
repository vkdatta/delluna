export const name="folder-lock";
export const id="dl_a0067b9de7e14c2e9659";
export const url=new URL("../icons/folder-lock.svg?v=655ff3812af743df773f82bc3ac541e493e677929e86c85bccc263c478773686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
