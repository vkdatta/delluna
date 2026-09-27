export const name="person-simple-ski-thin";
export const id="dl_389b627389a043e884f3";
export const url=new URL("../icons/person-simple-ski-thin.svg?v=a670d24001b2f323496b91233d25e6b6d6cacab8341645fb8e67d5d364eb60d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
