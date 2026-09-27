export const name="view_week";
export const id="dl_96a7fb51ea5cf81883bd";
export const url=new URL("../icons/view_week.svg?v=d85814174291e3b6fd7eb8aefcc8488ba752f3def9239e07eacca9a649ef1a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
