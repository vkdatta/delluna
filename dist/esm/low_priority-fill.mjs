export const name="low_priority-fill";
export const id="dl_3d8547d2929c552673b5";
export const url=new URL("../icons/low_priority-fill.svg?v=2d58dfb3e18d467a66b85221c6093441780e6ff0a4acbc26c415f1c743503b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
