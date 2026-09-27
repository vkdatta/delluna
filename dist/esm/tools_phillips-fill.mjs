export const name="tools_phillips-fill";
export const id="dl_d1ccc3f0c40dbdaef680";
export const url=new URL("../icons/tools_phillips-fill.svg?v=a72e1df4438c3aec991cd8346ebd7d9e59ed9d775c1225ca7f38999f2d0847e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
