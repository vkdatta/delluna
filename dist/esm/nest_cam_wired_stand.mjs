export const name="nest_cam_wired_stand";
export const id="dl_9a4ee62c684a561e14bf";
export const url=new URL("../icons/nest_cam_wired_stand.svg?v=eaec5b93d852c0b97c371c776df0c355fc33034f028c87e56e688b16834fdef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
