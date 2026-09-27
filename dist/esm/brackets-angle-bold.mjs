export const name="brackets-angle-bold";
export const id="dl_2684d38a71524e309bef";
export const url=new URL("../icons/brackets-angle-bold.svg?v=f5ccd6fe5af77a557249038af550c4ed86ec892111b2145c1e6f311016096fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
