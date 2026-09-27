export const name="chalkboard-teacher-light";
export const id="dl_943afb1cccd14ba998a5";
export const url=new URL("../icons/chalkboard-teacher-light.svg?v=f33af7c5064ca074780f68d7a6d86f715347dc6f3aed2882d252fd5d4c1c74da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
