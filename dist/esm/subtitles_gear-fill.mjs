export const name="subtitles_gear-fill";
export const id="dl_f2e2f3016ccfb436a4a7";
export const url=new URL("../icons/subtitles_gear-fill.svg?v=adc8ca4f4f0e6be928b4c3ec3255b5ef16bf7efadca0be71d0854111f57099d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
