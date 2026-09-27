export const name="treasure-chest-bold";
export const id="dl_9b5c3c70d2f5813b46ba";
export const url=new URL("../icons/treasure-chest-bold.svg?v=bfd1c23186a8d2ab74574fa46ae301712ea1459c4ff18e53eb40780f26e4cf57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
