export const name="shield-chevron-bold";
export const id="dl_087df0a5a4cb78b6dbc5";
export const url=new URL("../icons/shield-chevron-bold.svg?v=11efb19e2cc0d2f34417e4de15efd3479f0a9664f3b6388dae51e547774833b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
