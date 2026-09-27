export const name="replit-logo-duotone";
export const id="dl_611e011dd1e64f9791fb";
export const url=new URL("../icons/replit-logo-duotone.svg?v=db8b3a4219351ee8d06e72dffc3046cba1cab46d91a36c1bcef0ccffccae7a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
