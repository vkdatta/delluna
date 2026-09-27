export const name="cherries-duotone";
export const id="dl_bca95862cf024d6895c0";
export const url=new URL("../icons/cherries-duotone.svg?v=8acf527afef697bb57194db5d2f2c1f6631c62db73754f80b03ef6e62358b2f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
