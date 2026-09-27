export const name="crop_9_16";
export const id="dl_66badc0384105a3ec6f0";
export const url=new URL("../icons/crop_9_16.svg?v=28b8bf32f3995555bdebff97f9beaf0a2f41abeaf6014917561632314439a071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
