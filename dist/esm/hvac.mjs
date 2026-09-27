export const name="hvac";
export const id="dl_3e40574ee15650ae942f";
export const url=new URL("../icons/hvac.svg?v=2326c2e756ef8f034f90171c736ea6252f7d89c57752752afa2ff9327bdcfaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
