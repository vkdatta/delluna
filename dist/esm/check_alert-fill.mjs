export const name="check_alert-fill";
export const id="dl_d378229e3c5e2b2731f9";
export const url=new URL("../icons/check_alert-fill.svg?v=d33486296e5278a84b0a180e38b7c7b247204cf092ff378c5bdca01bf40a0a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
