export const name="ar_on_you-fill";
export const id="dl_00486d9b92aea9ff687e";
export const url=new URL("../icons/ar_on_you-fill.svg?v=7642729263d61ae832526b573ace3f59cb291b0c38cec22f20573f9c6573dd48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
