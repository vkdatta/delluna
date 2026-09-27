export const name="shades-fill";
export const id="dl_ea975d754da757ae32e0";
export const url=new URL("../icons/shades-fill.svg?v=f7d50c97de266a3f57bfe4732c7f2fa7624445995d4fdad148e14f0f94f7e660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
