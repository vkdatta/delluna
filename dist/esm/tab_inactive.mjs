export const name="tab_inactive";
export const id="dl_d2d687c375f8477c80a5";
export const url=new URL("../icons/tab_inactive.svg?v=008e814513c3bf07ba82efe8801caf8208e1719114f9deb922793ad3c8ed009e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
