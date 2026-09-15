export const name="check-fill";
export const id="dl_cc7df650c7e240dda864";
export const url=new URL("../icons/C/check-fill.svg?v=474d3792934bcd04134bb05e5c4ebec752c894e487adb7983d8859c3d9cf0552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
