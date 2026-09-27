export const name="lucid_1-clover";
export const id="dl_50db1593ceb44fcbac69";
export const url=new URL("../icons/lucid_1-clover.svg?v=ad492211a63797cea8ada69bda3a2e58db32ba6c380e20c1c24b27561ddf3e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
