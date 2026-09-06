export const name="caret-double-right-fill";
export const id="dl_ecc2c9c7d4e8497bbc78";
export const url=new URL("../icons/caret-double-right-fill.svg?v=36d3f2fc1cac6ac468ec9425e0bb87949ab6839de982d592fd560fa5a1facf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
