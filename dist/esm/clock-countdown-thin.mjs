export const name="clock-countdown-thin";
export const id="dl_384a5f4111354901a20f";
export const url=new URL("../icons/clock-countdown-thin.svg?v=fc505ef82bafab79f7103f4136275acc20527297119109219b0023b1a75c0573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
