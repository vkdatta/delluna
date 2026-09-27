export const name="tv_signin-fill";
export const id="dl_8382cb8b12c970c13594";
export const url=new URL("../icons/tv_signin-fill.svg?v=947d6a55acb616def42349a94cbe0713dc100e2ea711d481e0c33f75667b2c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
