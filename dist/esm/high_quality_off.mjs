export const name="high_quality_off";
export const id="dl_7d807b1194cdd7b2c0f1";
export const url=new URL("../icons/high_quality_off.svg?v=ee2127d1908db5940b1a230ee1c53b2dd5b5c1ad0c789dc27f510019d913f400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
