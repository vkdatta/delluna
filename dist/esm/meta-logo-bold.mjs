export const name="meta-logo-bold";
export const id="dl_245fc7df52bf4375afb5";
export const url=new URL("../icons/meta-logo-bold.svg?v=cb23d3e5c1598e7d992d2d14fec0020b131722a1c318a90a68daab0f9f798d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
