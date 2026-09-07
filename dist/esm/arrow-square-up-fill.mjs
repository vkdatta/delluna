export const name="arrow-square-up-fill";
export const id="dl_f96f289bb51c4105a4c2";
export const url=new URL("../icons/arrow-square-up-fill.svg?v=a88d2c81f154a72973ca60053a153f3505c3973e2faa8604fd91c6d4884b7954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
