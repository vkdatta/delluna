export const name="speaker-high-fill";
export const id="dl_ad11164afd504d9b8ff8";
export const url=new URL("../icons/S/speaker-high-fill.svg?v=c266c407915382db3866570f816934b804c1b84bd47d971fad0e95ac5107dd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
