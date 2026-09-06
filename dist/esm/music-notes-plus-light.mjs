export const name="music-notes-plus-light";
export const id="dl_301dceca14af4621b53f";
export const url=new URL("../icons/music-notes-plus-light.svg?v=745db5b0203d30bfca476f866ca250a797380e6646917105ff6d293cf0279f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
