export const name="dashboard_2_edit";
export const id="dl_116350ee0a2d58bac5c0";
export const url=new URL("../icons/dashboard_2_edit.svg?v=9c0f9f3d479552cd76924d0a42c32dcdc59316e1c419d5c690c18d4021033929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
