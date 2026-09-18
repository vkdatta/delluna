export const name="heart_check-fill";
export const id="dl_86370a148d2d4977a369";
export const url=new URL("../icons/heart_check-fill.svg?v=2ed77722d8317b66d06d52d3e351569af941871ec06a218391a9767b7a793e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
