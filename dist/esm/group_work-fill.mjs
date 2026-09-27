export const name="group_work-fill";
export const id="dl_24a2f151fc9efdcb419e";
export const url=new URL("../icons/group_work-fill.svg?v=69b74733106bf8b302e062a839818cf9786d5e2cd0d7cbd8491e379859de7e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
