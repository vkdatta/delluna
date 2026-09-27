export const name="folder_special";
export const id="dl_9d13c4960dea0747e6ce";
export const url=new URL("../icons/folder_special.svg?v=25e98a172303285e162c40bc7a2cea0b9212099c6bf049168470beaff86f0442",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
