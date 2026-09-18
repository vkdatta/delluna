export const name="control_point_duplicate-fill";
export const id="dl_becd9932c175487aadea";
export const url=new URL("../icons/control_point_duplicate-fill.svg?v=54745a4754a7272f738eeaab524b5475c2537d35f9fdcf79b2625febae5f391d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
