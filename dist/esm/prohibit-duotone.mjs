export const name="prohibit-duotone";
export const id="dl_c766fe0281294383b803";
export const url=new URL("../icons/prohibit-duotone.svg?v=dc60541be0503b72a34415badea53eeb26be0f06dce2f443851a3d8d290e183d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
