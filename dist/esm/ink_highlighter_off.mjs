export const name="ink_highlighter_off";
export const id="dl_fe8478e9a12e552ad295";
export const url=new URL("../icons/ink_highlighter_off.svg?v=ca5febe97c8db21ed6f4a3e4e6a7e7caf259fabcc41a02516577f64ed09dd2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
