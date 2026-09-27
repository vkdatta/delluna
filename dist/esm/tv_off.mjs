export const name="tv_off";
export const id="dl_64912985e174b8abda72";
export const url=new URL("../icons/tv_off.svg?v=08f3c9f9ea992e07f3a4fa92e679ba84cff732aacb3f36feb9174e7c3f8c0bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
