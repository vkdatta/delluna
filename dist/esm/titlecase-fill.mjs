export const name="titlecase-fill";
export const id="dl_43a50d786589c2402bdd";
export const url=new URL("../icons/titlecase-fill.svg?v=2185205f82e2e29feaa9e0b2799e5df4cc7e96a11b0996281ab3303e229ce682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
