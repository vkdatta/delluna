export const name="ev_shadow";
export const id="dl_380db878cd658b1ec09f";
export const url=new URL("../icons/ev_shadow.svg?v=7c2edf2a4dd1ae1604c96a14307981f87b12c4ef718eb7d755a2aff991d6a008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
