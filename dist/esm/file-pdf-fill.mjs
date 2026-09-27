export const name="file-pdf-fill";
export const id="dl_95ab054112f3414f8b00";
export const url=new URL("../icons/file-pdf-fill.svg?v=e69b2288ae6eb6bbc286088373e5e6597a87f160910da4ea5fb65473f3ca23d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
