export const name="commute-fill";
export const id="dl_621ee742cab19ca5ffeb";
export const url=new URL("../icons/commute-fill.svg?v=e09297cb4c8ac6129963fc848acdc7a660c254e3360754da9e2a72e077bd1069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
