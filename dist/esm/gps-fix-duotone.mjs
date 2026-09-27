export const name="gps-fix-duotone";
export const id="dl_33da79316ede4245b96b";
export const url=new URL("../icons/gps-fix-duotone.svg?v=495a1d8d09f6f27c05649b60e8cfa5c7100da1ec28d91ba3bfa6bfb8d7b95b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
