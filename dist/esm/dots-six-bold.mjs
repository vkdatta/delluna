export const name="dots-six-bold";
export const id="dl_fa2a9cd5220e4772ba07";
export const url=new URL("../icons/dots-six-bold.svg?v=28222ab5e7394fb1af89df40fc99374ad9d033d03b5d0ba700437af34e373516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
