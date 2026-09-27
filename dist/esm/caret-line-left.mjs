export const name="caret-line-left";
export const id="dl_e766ff4ad93546a8b52f";
export const url=new URL("../icons/caret-line-left.svg?v=40321572ee3fac275ffbb63e3c611d616907fa8217d0751c2ed4c2f676a6ef76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
