export const name="parachute-light";
export const id="dl_effad13ce91e497d87d2";
export const url=new URL("../icons/parachute-light.svg?v=f53b150f7be1060c2c14ade0151837b71b27e9e52221ac17f6d7bdb34aaec2a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
