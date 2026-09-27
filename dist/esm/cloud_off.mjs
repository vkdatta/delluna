export const name="cloud_off";
export const id="dl_793b0c544f7e3a16a377";
export const url=new URL("../icons/cloud_off.svg?v=6975af40684686e99beda89e57b8278b5dec76f80ef752fdeb3858207b0a684a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
