export const name="mobile_lock_portrait-fill";
export const id="dl_91fe94b01e8d3a69fa92";
export const url=new URL("../icons/mobile_lock_portrait-fill.svg?v=08973a3cef6a27559b117e2e6b8de4267f0969cdec7cd871a4de729cd38544ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
