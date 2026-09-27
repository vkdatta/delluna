export const name="view_list";
export const id="dl_4bc57c0abac66accd209";
export const url=new URL("../icons/view_list.svg?v=a580c895b6f9d40e38a3341197c8bba7ee020d0074be78e652cc9080a60e36f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
