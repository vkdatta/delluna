export const name="link-simple-duotone";
export const id="dl_eb5f8d3829254cc680fb";
export const url=new URL("../icons/link-simple-duotone.svg?v=a8f1ea67c79f7e6e13f8328cd777fd1fe99bfe646e24e4fd00343aa3964ac036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
