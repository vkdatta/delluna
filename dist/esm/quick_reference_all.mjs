export const name="quick_reference_all";
export const id="dl_273488540be039cd57b1";
export const url=new URL("../icons/quick_reference_all.svg?v=5ea198c61a21305cce96dc886f380d197e06447480c1d9226337fe5860cf23a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
