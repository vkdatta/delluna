export const name="local_atm";
export const id="dl_87ee8f3df9c56436b649";
export const url=new URL("../icons/local_atm.svg?v=9679aa1f7b994f626653127ccd4ff64f8ce948cf78eb0709872ef57c47594839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
