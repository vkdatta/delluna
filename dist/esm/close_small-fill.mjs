export const name="close_small-fill";
export const id="dl_95d86aec6ef729046af8";
export const url=new URL("../icons/close_small-fill.svg?v=78db76ed538d2cc83015b09b3437ff30d9d19e87f6f08e1cafc908da0009b91d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
