export const name="list_alt";
export const id="dl_0aaf31b118aac481a7fd";
export const url=new URL("../icons/list_alt.svg?v=bb39d8c8d5da987ccd620156613bbc25993a74b052d58222611a89154f3d66f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
