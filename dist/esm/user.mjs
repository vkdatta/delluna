export const name="user";
export const id="dl_466bda0a8e51fcd7e38f";
export const url=new URL("../icons/user.svg?v=94cf0708d3cfdeee7f02c57a27107570d9f02f65968c42f90256c01fe5d2fe38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
