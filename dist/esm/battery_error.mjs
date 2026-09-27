export const name="battery_error";
export const id="dl_ae05c9f4417193311510";
export const url=new URL("../icons/battery_error.svg?v=b556e3cb330a7b7ed8417cf752a977623a1e4a5877fd89f3d5a8313b7589c265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
