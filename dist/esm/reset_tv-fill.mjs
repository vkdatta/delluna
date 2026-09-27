export const name="reset_tv-fill";
export const id="dl_b0f748d654faf7336e2e";
export const url=new URL("../icons/reset_tv-fill.svg?v=4366c76503e466c824a4c271037058b67e252ef28894f05e8b907ba2633bd897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
