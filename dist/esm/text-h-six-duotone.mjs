export const name="text-h-six-duotone";
export const id="dl_8283067dbd46e3096655";
export const url=new URL("../icons/text-h-six-duotone.svg?v=ecda35d967fad0800e48e7c5d47ef6e3dfa417c2238e31702dbb35bee1cb37ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
