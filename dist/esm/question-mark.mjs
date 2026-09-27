export const name="question-mark";
export const id="dl_8a32c35432174493b936";
export const url=new URL("../icons/question-mark.svg?v=85c7245657cec6660a6766fbfa62f30627b09d0167c307e761c87ca9b29ec366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
