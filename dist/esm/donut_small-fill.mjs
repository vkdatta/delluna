export const name="donut_small-fill";
export const id="dl_f9e682e32cf889b01c84";
export const url=new URL("../icons/donut_small-fill.svg?v=8ba77bef136bbf279e4a29367c0a401b1cab0729f210423dc63c5c80ebece9e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
