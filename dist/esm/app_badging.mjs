export const name="app_badging";
export const id="dl_c92f93e1e3b54b2cb723";
export const url=new URL("../icons/A/app_badging.svg?v=8034d382e10a808284830d2e9168de86b237ca3a739500b3e9ba1f4de07d8c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
