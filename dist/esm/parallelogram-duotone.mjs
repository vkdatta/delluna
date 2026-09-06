export const name="parallelogram-duotone";
export const id="dl_7f7da5c661064860bf6b";
export const url=new URL("../icons/parallelogram-duotone.svg?v=23159b8a4e68a072a934ebaae4ae6480a15bfd21db84297bc43a754d2d788392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
