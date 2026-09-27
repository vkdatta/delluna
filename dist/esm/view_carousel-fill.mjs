export const name="view_carousel-fill";
export const id="dl_a30752a305b426040675";
export const url=new URL("../icons/view_carousel-fill.svg?v=f9c61f9e76d5e9738a7dcd99adb5b7076f74be39ff1eae262cacc083868bf8ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
