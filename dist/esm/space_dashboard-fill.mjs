export const name="space_dashboard-fill";
export const id="dl_9d2671215126bb4f352e";
export const url=new URL("../icons/space_dashboard-fill.svg?v=1621516fbb3aaaab31bd595e505e27473991c7a8629a5e0c67a5c2386b504ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
