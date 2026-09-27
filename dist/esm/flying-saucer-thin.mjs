export const name="flying-saucer-thin";
export const id="dl_33e9945018034fe59aeb";
export const url=new URL("../icons/flying-saucer-thin.svg?v=5b937c189bad6a0175ee78a5c626b39db2d9df2fe4e4b526227bbca2320c91f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
