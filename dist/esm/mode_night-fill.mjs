export const name="mode_night-fill";
export const id="dl_cf1363d8b7df1d22b0bf";
export const url=new URL("../icons/mode_night-fill.svg?v=37b349046ffe88b5f61aefa6d571cd6f43d33ec17fef6e7b3172108435c0ec63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
