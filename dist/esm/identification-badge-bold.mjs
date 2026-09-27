export const name="identification-badge-bold";
export const id="dl_5afaa755a4224d60a19a";
export const url=new URL("../icons/identification-badge-bold.svg?v=a5446c409bff7b3585e7ff14d1254cd7fb36b74a477f77c0125f8beb7279a3e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
