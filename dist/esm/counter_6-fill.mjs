export const name="counter_6-fill";
export const id="dl_e18a5fa276baea73f65e";
export const url=new URL("../icons/counter_6-fill.svg?v=0df213243c86a7bee22bee8a12bb2efd7f10fff0272e61a3d05caede41a31faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
