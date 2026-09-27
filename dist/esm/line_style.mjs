export const name="line_style";
export const id="dl_4737e1dbe8123bbc0b09";
export const url=new URL("../icons/line_style.svg?v=15a920d68b3a5e70ca977fc3095a8f0b44e5600e4059e88ab05bbcfa8c22e6b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
