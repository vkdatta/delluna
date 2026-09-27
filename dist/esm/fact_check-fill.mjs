export const name="fact_check-fill";
export const id="dl_63bb910c1ddcfc9f2bc1";
export const url=new URL("../icons/fact_check-fill.svg?v=b1121bd9d236155f3677a07933f5238c36b9cacedf9e487b47e5a1ea38debdff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
