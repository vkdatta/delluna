export const name="pan_zoom-fill";
export const id="dl_ad7385fef17dc730124c";
export const url=new URL("../icons/pan_zoom-fill.svg?v=e967d6efe4cc297f68763e455009d5589f2ff5db7c356e08c362929857d0335b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
