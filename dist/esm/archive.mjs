export const name="archive";
export const id="dl_995faa08342f44fa8765";
export const url=new URL("../icons/archive.svg?v=8b096df09d2464d1d28fd905b3b65b6d0cad9b8b0f96e53a02b9aba5c7d9eed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
