export const name="truck-trailer-duotone";
export const id="dl_8fb095a0595075c1dac9";
export const url=new URL("../icons/truck-trailer-duotone.svg?v=4eafac0f302825d84d9cf9bf77be128ff242cb36e58a466eb179d62c2e12b515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
