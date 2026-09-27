export const name="sidebar-simple";
export const id="dl_34d1ccaaac6b4f7d0900";
export const url=new URL("../icons/sidebar-simple.svg?v=19700a8ed3642103c6c8a6b28dfda7c40e5b0454be30be2d303cd5b14a3d688e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
