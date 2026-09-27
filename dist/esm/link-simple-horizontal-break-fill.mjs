export const name="link-simple-horizontal-break-fill";
export const id="dl_c646aa6c3713408387f4";
export const url=new URL("../icons/link-simple-horizontal-break-fill.svg?v=8a8063e3eff9488adca650bb75f9b740d7d9bdd07e1cc9a0933c82da16416130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
