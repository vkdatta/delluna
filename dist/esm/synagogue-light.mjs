export const name="synagogue-light";
export const id="dl_ffff3694081b44fba211";
export const url=new URL("../icons/S/synagogue-light.svg?v=6393d2776b4a9201097f8f0976473c463850268e9822bcf3f7be9ad51d790447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
