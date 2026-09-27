export const name="speed_1_5x-fill";
export const id="dl_f4fe67386f4b863bc349";
export const url=new URL("../icons/speed_1_5x-fill.svg?v=c25293a31ac0dc304fab2e8feceb32d621ce75076c9ffeb905a49aecce416879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
