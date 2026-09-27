export const name="person-simple-swim-thin";
export const id="dl_3d85ee91203445a083fa";
export const url=new URL("../icons/person-simple-swim-thin.svg?v=ca38e3f2c78672517465f76490f09b9ac6296ae05c47db7e5eab562b1b320a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
