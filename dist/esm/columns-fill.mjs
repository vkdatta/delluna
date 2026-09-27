export const name="columns-fill";
export const id="dl_32d8161945d54656bbfc";
export const url=new URL("../icons/columns-fill.svg?v=73b311bc7b6c0d91d109480511a4f83a50552e3d99ec2909c11e21a954b85631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
