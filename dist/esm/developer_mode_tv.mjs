export const name="developer_mode_tv";
export const id="dl_a10cef093aa3427c856f";
export const url=new URL("../icons/developer_mode_tv.svg?v=a48c39437f87ed1d8e8bfdf84fc3978c65cb9697dd20ec34ee8c1d305f9a51d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
