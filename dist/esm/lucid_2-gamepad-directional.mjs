export const name="lucid_2-gamepad-directional";
export const id="dl_e2893e493afb44918a69";
export const url=new URL("../icons/lucid_2-gamepad-directional.svg?v=2440b4f015229cf28d171c8449ca6bdaef148052a72de76aeee160b324bc1cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
