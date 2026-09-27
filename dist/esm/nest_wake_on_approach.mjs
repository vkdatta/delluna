export const name="nest_wake_on_approach";
export const id="dl_34794c8eb5019a2d9c5a";
export const url=new URL("../icons/nest_wake_on_approach.svg?v=70d1d7594fb6b8409aeef72382a348932911093f3ca7892f9237ef8446caa031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
