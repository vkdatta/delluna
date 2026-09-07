export const name="inner-cross-dot";
export const id="dl_60c7f0b0c9f94efeb4f4";
export const url=new URL("../icons/close/inner-cross-dot.svg?v=9a793cac058c92b049e524e8c2300889e0e7f5421b2a105b375496b2c66dbe41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
