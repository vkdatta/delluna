export const name="discover_tune-fill";
export const id="dl_2411ae00e816e2e32d7e";
export const url=new URL("../icons/discover_tune-fill.svg?v=a061ae50e9dd30350124cf913944be8bf5a419948254d9c693b2cf2dc28f5230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
