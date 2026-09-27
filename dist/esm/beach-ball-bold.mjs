export const name="beach-ball-bold";
export const id="dl_b6fa78b34ca44cd4bde6";
export const url=new URL("../icons/beach-ball-bold.svg?v=7eaff9cef0b464043e7504c420cd13b8cf8d02cf8364c57be9e134c405716af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
