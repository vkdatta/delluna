export const name="battery_2_bar-fill";
export const id="dl_67acc77f7365e8450424";
export const url=new URL("../icons/battery_2_bar-fill.svg?v=2d4baeb33c622fc9cb5fa963d0853e6dd0210c4e1fe0dc67a934acf1b32a1bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
