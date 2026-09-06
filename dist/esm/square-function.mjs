export const name="square-function";
export const id="dl_eb0d883b25404ed1bf61";
export const url=new URL("../icons/square-function.svg?v=ae470d1f98f337138c5804de5f7889f8f27615e5c1a2d1505f974d583582a231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
