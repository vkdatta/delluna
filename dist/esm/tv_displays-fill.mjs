export const name="tv_displays-fill";
export const id="dl_4871b71d50b8eb785c33";
export const url=new URL("../icons/tv_displays-fill.svg?v=5c67c9e3a008d2de6f3e5e65cfbd8360240062ee5b778586fefa7fe4bcc21a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
