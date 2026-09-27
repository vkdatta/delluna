export const name="stretch-horizontal";
export const id="dl_bc7bf82fdc7a4947905d";
export const url=new URL("../icons/stretch-horizontal.svg?v=8dbe1df5f07a7449dc35f83aa8c7f3db0678d10bedc92d6cdb711f2f81ca6d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
