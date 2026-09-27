export const name="thermometer-hot";
export const id="dl_209cd5212c84f0cff8a1";
export const url=new URL("../icons/thermometer-hot.svg?v=4a8ce954700d65466e3070000f29021f7ac878a0337d76a95b4187ee04ea5cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
