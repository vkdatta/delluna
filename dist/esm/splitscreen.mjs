export const name="splitscreen";
export const id="dl_949f29240120aa4d9703";
export const url=new URL("../icons/splitscreen.svg?v=b9cf98454577245dd222be375b0c9caa7ff25d2da706a16b1d06b19f9de48883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
