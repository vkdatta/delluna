export const name="stack_group";
export const id="dl_d34a42269cc5eb5a7492";
export const url=new URL("../icons/stack_group.svg?v=f8d741201658af9bd46e026015990f619d57038af458855941fd1a9a05c263a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
