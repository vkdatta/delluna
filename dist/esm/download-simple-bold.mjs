export const name="download-simple-bold";
export const id="dl_725e12e0f2b34e518221";
export const url=new URL("../icons/download-simple-bold.svg?v=234ca3e7f96bc739b11783c04fab1fb4ddf3089a1a9a036b622828f8b4fe6335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
