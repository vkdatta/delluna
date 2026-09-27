export const name="event_list";
export const id="dl_94989aa3c42ad21803ae";
export const url=new URL("../icons/event_list.svg?v=2ea91f68b38419fce9610d886902e876f902b20e5951c8818804a2a74bcc1bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
