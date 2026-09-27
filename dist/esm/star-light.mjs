export const name="star-light";
export const id="dl_fc717b2cd0cf06f41fab";
export const url=new URL("../icons/star-light.svg?v=507bd812c21d44ed7a641b4b61da27d64f57ed6ebb8a26b079c71fe477fb7487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
