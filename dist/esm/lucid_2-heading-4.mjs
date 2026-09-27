export const name="lucid_2-heading-4";
export const id="dl_a2a51c0ba44046bb9cca";
export const url=new URL("../icons/lucid_2-heading-4.svg?v=78299db774ede5db67b047d3993d88fc6bb1f95b668b5b655dcc0161f6f43b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
