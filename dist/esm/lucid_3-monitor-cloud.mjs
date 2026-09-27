export const name="lucid_3-monitor-cloud";
export const id="dl_d98e00a343c4418bb11d";
export const url=new URL("../icons/lucid_3-monitor-cloud.svg?v=a9829b639faae56cd5c835aee51e3266f0c354e48d9274009118ee5f3cfb70d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
