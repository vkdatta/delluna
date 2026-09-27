export const name="hourglass_pause-fill";
export const id="dl_8287c888e81e0ed8fa12";
export const url=new URL("../icons/hourglass_pause-fill.svg?v=4bf517175c0d0476a2653de496b77e48e552c6311fb0e3540ab59b281b297d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
