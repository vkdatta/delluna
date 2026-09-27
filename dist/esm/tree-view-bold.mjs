export const name="tree-view-bold";
export const id="dl_bbe152c38bc8efeb76ae";
export const url=new URL("../icons/tree-view-bold.svg?v=a9b7df227ba0ba6e841fb87b76f7a9714ee4dd9004779fdf6a48a9aa12992a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
