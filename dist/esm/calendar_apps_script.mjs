export const name="calendar_apps_script";
export const id="dl_f9f24a4b21f24a00a144";
export const url=new URL("../icons/calendar_apps_script.svg?v=1a4bbc41c7f854f43faafc93b7cd887ac0c5c6ca1fbfde7011d9e2e9f9eec3b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
