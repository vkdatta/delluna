export const name="tv_signin-fill";
export const id="dl_2426a4df5b0f80999652";
export const url=new URL("../icons/tv_signin-fill.svg?v=d7887e9d3f2467f1a0e187c2d729f6dfcdb12458269ed497219fde4727f27135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
