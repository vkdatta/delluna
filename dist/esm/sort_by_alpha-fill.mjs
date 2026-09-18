export const name="sort_by_alpha-fill";
export const id="dl_5f0f71d7d18043a29cc9";
export const url=new URL("../icons/sort_by_alpha-fill.svg?v=9db8d1eb057fa82a1c0e11cf0fd1631ce2d67352f45cb1b847740180eff27b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
