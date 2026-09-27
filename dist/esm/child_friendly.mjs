export const name="child_friendly";
export const id="dl_afd63fb28bf8ad6cce46";
export const url=new URL("../icons/child_friendly.svg?v=102c8e4944542ddd99977eabaae6fa106caab70e1e2b35f2944bccd198212819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
