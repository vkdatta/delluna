export const name="question-mark-duotone";
export const id="dl_1daf8cb1c68a4ede8cc4";
export const url=new URL("../icons/question-mark-duotone.svg?v=2bc359c41f439c2d7d826ec6f56af697d252ed482037f133f42f2751b33ccd0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
