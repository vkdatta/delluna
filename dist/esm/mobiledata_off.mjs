export const name="mobiledata_off";
export const id="dl_8b22fd2e3f774c929ff0";
export const url=new URL("../icons/mobiledata_off.svg?v=75fd98c767e489dc99e74e7ce39b2e7f47386488ce8437cfc979bed06dd9b5d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
