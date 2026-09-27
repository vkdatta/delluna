export const name="desktop_access_disabled";
export const id="dl_8aac44756a92030ecd25";
export const url=new URL("../icons/desktop_access_disabled.svg?v=56323e1694d2c52d25596a3711f8861290dc473230db25958bdf90aae0e2ef9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
