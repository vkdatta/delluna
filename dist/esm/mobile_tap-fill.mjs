export const name="mobile_tap-fill";
export const id="dl_51cfdc2a941e88b6014b";
export const url=new URL("../icons/mobile_tap-fill.svg?v=c0f853ef388339b976c60fa9b0801847ca7f6b513f859a278458e58d317e744a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
