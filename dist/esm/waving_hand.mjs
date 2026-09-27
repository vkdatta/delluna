export const name="waving_hand";
export const id="dl_eedad589134501aa3bf4";
export const url=new URL("../icons/waving_hand.svg?v=c9d9e2c5d4f19e57e3f4b87ea1c3ec612d3f6f5e239d1ebb1d346f42cd5338c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
