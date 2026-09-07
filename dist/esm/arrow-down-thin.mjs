export const name="arrow-down-thin";
export const id="dl_4b90c5a56ae448089000";
export const url=new URL("../icons/arrow-down-thin.svg?v=afe0d68873d5955f05d724dcb0c41c095f1645d02f7716038bbd897f45c784fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
