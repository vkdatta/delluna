export const name="radioactive-fill";
export const id="dl_3f45b42c9cca4e60b95e";
export const url=new URL("../icons/radioactive-fill.svg?v=d5c29610d660237efff76bbab2815272708501b7a05776b95fb10b278fd37f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
