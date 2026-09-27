export const name="magnify_docked-fill";
export const id="dl_1c42051181a8688dc451";
export const url=new URL("../icons/magnify_docked-fill.svg?v=6eea2ebc4d383a8c77dca8e8cdf00e194524c9530b188f32943a18375d34f08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
