export const name="lucid_1-arrow-up-right";
export const id="dl_6989f0145a8c4fbc94a9";
export const url=new URL("../icons/lucid_1-arrow-up-right.svg?v=2d811c08891b2132d119d532f53776521a701f310e9dd33ece0e8ace48764ede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
