export const name="counter_7";
export const id="dl_973d79520424ba18caf2";
export const url=new URL("../icons/counter_7.svg?v=e30147b7a079ed6fa60c89be3bfb8e8d283fd6c79514181a9842603b532a24de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
