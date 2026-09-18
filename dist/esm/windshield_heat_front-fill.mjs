export const name="windshield_heat_front-fill";
export const id="dl_518db244062c42e19947";
export const url=new URL("../icons/W/windshield_heat_front-fill.svg?v=32ac3e2c434be920eb9617272c9eea7a97e6cd1aaa8ff8b25710643ee6a7a248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
