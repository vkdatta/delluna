export const name="door_open";
export const id="dl_026f0a97f282f132b7fc";
export const url=new URL("../icons/door_open.svg?v=7182864b85ad8063677a32a0dd40fe25ad0a770c7a5cd419e3c340c875bbbd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
