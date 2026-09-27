export const name="logo_dev";
export const id="dl_a6e9c5c1a8fee6e3642a";
export const url=new URL("../icons/logo_dev.svg?v=e7cdae084180e6da442e2aed869a12238589bda69b416f2dffb1672e37cc355d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
