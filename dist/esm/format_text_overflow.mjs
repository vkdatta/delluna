export const name="format_text_overflow";
export const id="dl_4ee97ccb9653ed84a39f";
export const url=new URL("../icons/format_text_overflow.svg?v=f0ec4817f6353ba08b53fef7603be9b8ab71bf11f641c03041e88e1fde7402f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
