export const name="arrow_forward_ios-fill";
export const id="dl_152bc2ec34463e36ebd3";
export const url=new URL("../icons/arrow_forward_ios-fill.svg?v=487591e41383d48fd5e176eb21711fac46da5a88b9cd77c45b5b3b1662db8d56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
