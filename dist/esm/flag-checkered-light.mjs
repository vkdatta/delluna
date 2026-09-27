export const name="flag-checkered-light";
export const id="dl_bd502b5d3369470c98f8";
export const url=new URL("../icons/flag-checkered-light.svg?v=48b2a3e79e9165c65a36b8aef44eb8b268059ba2cc9188660e9349615b8d3bdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
