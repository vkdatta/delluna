export const name="security-fill";
export const id="dl_43e2b74d006bb56a897d";
export const url=new URL("../icons/security-fill.svg?v=41e82d1b03742d2672faba82e1698bf10292dd846d762289c09331ae94701025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
