export const name="scroll-light";
export const id="dl_e764084c4f7e4f339de3";
export const url=new URL("../icons/S/scroll-light.svg?v=9338871a966e4e665e0df4c256648b8be4df3ef6ed221df3a1f85a768e41fd9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
