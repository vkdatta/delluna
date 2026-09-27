export const name="checkbook-fill";
export const id="dl_bf6bd9aa3013c8aa4166";
export const url=new URL("../icons/checkbook-fill.svg?v=937dd69cb3527d9fba18af4f4fa21ea09192a5ba247ca8539849e4720126b129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
