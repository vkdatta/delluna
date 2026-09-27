export const name="family_history-fill";
export const id="dl_1844e1272ff81e963cea";
export const url=new URL("../icons/family_history-fill.svg?v=6748e066a404c023cf1bee131a85cf819c7bf0f93dd1f4f084b6af6c3c6373d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
