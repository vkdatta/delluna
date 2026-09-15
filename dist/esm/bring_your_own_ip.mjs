export const name="bring_your_own_ip";
export const id="dl_1e0696c0a77b40cb9fc4";
export const url=new URL("../icons/B/bring_your_own_ip.svg?v=5557d21c9ab3a490d741d09cd4effe3f9ac54de746b743b774229c1ee46309f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
