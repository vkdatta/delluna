export const name="cell-signal-x-thin";
export const id="dl_789c35baea1f47978471";
export const url=new URL("../icons/cell-signal-x-thin.svg?v=6e1b9dead2dbf8a2d2f3e9284499154c9b9e3bb19cd3063ae705269946713582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
