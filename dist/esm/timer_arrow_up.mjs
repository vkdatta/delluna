export const name="timer_arrow_up";
export const id="dl_a992fefec765a775b3a0";
export const url=new URL("../icons/timer_arrow_up.svg?v=ee1ac5c203ff81e927dcfc81689a6c37d2ddd4c0691a3021211ebe805793862e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
