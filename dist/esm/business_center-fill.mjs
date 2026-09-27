export const name="business_center-fill";
export const id="dl_2720d395bf8d53d4fe3a";
export const url=new URL("../icons/business_center-fill.svg?v=f0089aae13211650846f04489069c3ba60c2b436aea4a5012e0664e151a789ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
