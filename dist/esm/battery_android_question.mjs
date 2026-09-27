export const name="battery_android_question";
export const id="dl_abb4f106316743987472";
export const url=new URL("../icons/battery_android_question.svg?v=00f3116825481a9d41e0b941e37b4c190bc2c3b0ae3381eb4e51c33c73739e80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
