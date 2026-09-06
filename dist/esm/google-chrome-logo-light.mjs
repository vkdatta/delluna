export const name="google-chrome-logo-light";
export const id="dl_954f41f21d7d4828bb37";
export const url=new URL("../icons/google-chrome-logo-light.svg?v=78fe51997e701ba099f417eae897e87425921b9e6f04a522857b3238ba4bcf02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
