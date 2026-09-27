export const name="vignette";
export const id="dl_250c92441461d3ef1dc0";
export const url=new URL("../icons/vignette.svg?v=80487e3355f087fa4e2e748eb1aee3e1d9988584373bda4984a3699bd125a3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
