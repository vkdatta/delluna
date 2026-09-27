export const name="lucid_3-message-circle-x";
export const id="dl_217be2ef63d44afd9413";
export const url=new URL("../icons/lucid_3-message-circle-x.svg?v=24a752cd927276e5042ed63805ff1d464b2fab4bcb22f1fe30a8adb3efadc124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
