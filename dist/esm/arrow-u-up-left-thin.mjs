export const name="arrow-u-up-left-thin";
export const id="dl_60f871b0ab7f40ceadfe";
export const url=new URL("../icons/arrow-u-up-left-thin.svg?v=5cdbb534b1ed09f990856fc1fdac13f18589b1c101b5269efb7aee9bec63421b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
