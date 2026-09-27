export const name="arrow-square-up-fill";
export const id="dl_f96f289bb51c4105a4c2";
export const url=new URL("../icons/arrow-square-up-fill.svg?v=fbdde35f694fe95f31eedca2ea997900c2edbe2b57ae77b95a024fd2ca6d2a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
