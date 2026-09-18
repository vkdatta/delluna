export const name="download_done-fill";
export const id="dl_4f0ba272657644db9832";
export const url=new URL("../icons/download_done-fill.svg?v=4e6c765d0a194a8984fedafec4c3f2385a23537d4b552452fc9a646c2a2c3a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
