export const name="battery_android_question-fill";
export const id="dl_d1012449edc5c46d44ab";
export const url=new URL("../icons/battery_android_question-fill.svg?v=c4c0eaa9bda61ad522e4aa19858a862b581b179806c4a2eaabe9f84da8bfb8ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
