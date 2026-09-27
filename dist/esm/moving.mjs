export const name="moving";
export const id="dl_0e6d6f88179d3035695c";
export const url=new URL("../icons/moving.svg?v=550a947c4a093b378ca0bfbf28f2befd2ae2c1053522530455513539379b7be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
