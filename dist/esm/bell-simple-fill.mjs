export const name="bell-simple-fill";
export const id="dl_79a41b0849204e569fd2";
export const url=new URL("../icons/bell-simple-fill.svg?v=3b3ade01a234113f99d2a85226103a5cc9121d4a1f2490875831230cf8e5d8da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
