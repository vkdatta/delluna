export const name="keyboard_capslock_badge-fill";
export const id="dl_5e895d38d0f3f59e90d8";
export const url=new URL("../icons/keyboard_capslock_badge-fill.svg?v=fc73d06f0f342392fd2010013f3c93ef61db8551480d1b29d4c44a411ae20c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
