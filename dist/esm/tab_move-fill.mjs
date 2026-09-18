export const name="tab_move-fill";
export const id="dl_48db3f8008ca48c5ab4a";
export const url=new URL("../icons/tab_move-fill.svg?v=de98646b0791871942af3d10b49a6f5f7120c532300c23face41dd6ee599303d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
