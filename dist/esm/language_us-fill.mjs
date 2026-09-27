export const name="language_us-fill";
export const id="dl_51deebe143889db6d0df";
export const url=new URL("../icons/language_us-fill.svg?v=474364229775565f61ea0b45851aae0b25123866dccc6ad67e8a43239fdd248e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
