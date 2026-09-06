export const name="pulse-fill";
export const id="dl_ab6a8f675024456a977a";
export const url=new URL("../icons/pulse-fill.svg?v=19e97e53f5ef27fc826b29eeabb9204f2d439da24b53f389aac3c8ab03bf433f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
