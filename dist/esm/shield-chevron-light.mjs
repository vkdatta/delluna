export const name="shield-chevron-light";
export const id="dl_0039b15081c94007bfb8";
export const url=new URL("../icons/S/shield-chevron-light.svg?v=85dc69cff87a3cb21fb085f0b38fd9e2e4a09d04ba7adfc7fd2165ed0b19f66d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
