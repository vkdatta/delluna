export const name="resize-light";
export const id="dl_129d65546c8a4ed5af19";
export const url=new URL("../icons/resize-light.svg?v=8283ea2e223ba5b3041b9cd31eebd1fa75ec5e822260c4f057e7d45a9a10eefb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
