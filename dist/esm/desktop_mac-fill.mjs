export const name="desktop_mac-fill";
export const id="dl_f20e2e1ed36ca67828c2";
export const url=new URL("../icons/desktop_mac-fill.svg?v=097e3fa76c91a1e3667b935e08e06b42eba2b4d9446101c2f243827220b9d860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
