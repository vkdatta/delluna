export const name="touch_long-fill";
export const id="dl_76a0c6a7160bf3c4dd71";
export const url=new URL("../icons/touch_long-fill.svg?v=540dcfc1ec93ff09f87e255a36ea03a58111300948f2b8ec58a28d7815073817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
