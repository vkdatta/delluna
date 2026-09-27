export const name="flex_direction";
export const id="dl_f50bf14875b856236464";
export const url=new URL("../icons/flex_direction.svg?v=5687a246a778f634508b415198b9b6133e60c2d4d3899cd66aa3c5c31957c768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
