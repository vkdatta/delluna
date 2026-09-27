export const name="nuclear-plant";
export const id="dl_21820646c1f841ed8464";
export const url=new URL("../icons/nuclear-plant.svg?v=e7808300994e84f93ebbaa1eb4da173136cfac313ffd7c64951a2d9f93257ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
