export const name="at-fill";
export const id="dl_a8946391bc9e481b9675";
export const url=new URL("../icons/at-fill.svg?v=972f5ec48000ef22485b1107678646d12a3fb7b63fd8c754eaa5cf8a7fc9a403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
