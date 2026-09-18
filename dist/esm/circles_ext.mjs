export const name="circles_ext";
export const id="dl_2ad5c5b279684309a755";
export const url=new URL("../icons/circles_ext.svg?v=96791cbf2ea76a68eba3f12fca0aed0657efeb2ac34375a6ee6644eaa0afea51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
