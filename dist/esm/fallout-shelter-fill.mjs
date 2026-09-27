export const name="fallout-shelter-fill";
export const id="dl_18534b2c971a4efcb0fb";
export const url=new URL("../icons/fallout-shelter-fill.svg?v=897cf1daaeab67b36d13c91ef0c24dbc36fa7d246db2b8a31055bc6e78e3cd54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
