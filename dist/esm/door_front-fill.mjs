export const name="door_front-fill";
export const id="dl_682a75a9f3faa5f5a283";
export const url=new URL("../icons/door_front-fill.svg?v=ceb49a47103715d78a6411d0600ad365a257b878411bb4235c7acff50eb5b246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
