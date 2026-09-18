export const name="avg_pace";
export const id="dl_e829add377a143f3abcd";
export const url=new URL("../icons/avg_pace.svg?v=7462ea9f4c03f4be835cc30200742b7331e39f2224fd57894e03c04483120b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
