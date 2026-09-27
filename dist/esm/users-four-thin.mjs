export const name="users-four-thin";
export const id="dl_c2d5e29528556534abd4";
export const url=new URL("../icons/users-four-thin.svg?v=c24e34b6397789032315d8cc183bdb2aabb8e67090dea38c97ceb6c30b3b6c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
