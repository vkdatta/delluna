export const name="timer_pause";
export const id="dl_2996ecaede6fe516a88d";
export const url=new URL("../icons/timer_pause.svg?v=e9cf21ee7309e1a6c49bcece9e59ead937c03d0df37d3cfb2c900b5913d6c1ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
