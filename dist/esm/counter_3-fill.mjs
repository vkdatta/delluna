export const name="counter_3-fill";
export const id="dl_05e10aae3a974614353b";
export const url=new URL("../icons/counter_3-fill.svg?v=ada7781bea0bd9e27ea1afab5447db792f565cddf55a5f06cc1ec0b4b0d3d530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
