export const name="bell-z-fill";
export const id="dl_d5dc5faf17444d5881ad";
export const url=new URL("../icons/bell-z-fill.svg?v=cb8d794fb7d4dc7fead457d2284e99624f6b32fa8f83ff8b9d897c5ac349821a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
