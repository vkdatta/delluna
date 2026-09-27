export const name="stairs-thin";
export const id="dl_f73ba74aa0c582489598";
export const url=new URL("../icons/stairs-thin.svg?v=aae8088090acc9eae991515095308202a7888b52945e8fcc0df7db92ccf02ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
