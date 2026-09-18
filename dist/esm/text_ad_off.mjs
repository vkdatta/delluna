export const name="text_ad_off";
export const id="dl_92d6b29881b24dd5904e";
export const url=new URL("../icons/text_ad_off.svg?v=012504ae79c381488c60e84ced765e22385a8b6111319f261f835b84611676e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
