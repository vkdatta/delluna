export const name="group_work-fill";
export const id="dl_dc56f57ef49a59cda54f";
export const url=new URL("../icons/group_work-fill.svg?v=f540606fdcda44451eca5f979f1c3a030187a89f4ef37188812c394f9915d02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
