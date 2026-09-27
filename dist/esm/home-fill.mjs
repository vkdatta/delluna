export const name="home-fill";
export const id="dl_b591a779e38104b18fdc";
export const url=new URL("../icons/home-fill.svg?v=f9a2158e2fe6d4f54c4ee0e4f8962d7aba8b6f486fc5a4195592e1944c1e5f12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
