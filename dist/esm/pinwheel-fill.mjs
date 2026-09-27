export const name="pinwheel-fill";
export const id="dl_36ab15fa8f5247b5951e";
export const url=new URL("../icons/pinwheel-fill.svg?v=b86b07b6468eb0706e57777ee60e3ff247e12a36a70dbbe4ea5a3cace0bbd1e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
