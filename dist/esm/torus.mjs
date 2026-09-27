export const name="torus";
export const id="dl_bd6e69b0722942928ce8";
export const url=new URL("../icons/torus.svg?v=9a180347eaa00f5e38cdfa9dde0f68c8f035d8ad8217123c9177696d113b39db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
