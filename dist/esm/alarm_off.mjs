export const name="alarm_off";
export const id="dl_05f15c13b0f713a4e314";
export const url=new URL("../icons/alarm_off.svg?v=4fb381b8afae953c6c99ace18fb766edc5b554c585db37615e9f0739936d1f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
