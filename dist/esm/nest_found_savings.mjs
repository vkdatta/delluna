export const name="nest_found_savings";
export const id="dl_72939348cbbf489781ee";
export const url=new URL("../icons/nest_found_savings.svg?v=9a32fdef02d099fe420ef641e837b38039d06839ecdbcc4976225820324086a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
