export const name="online_prediction-fill";
export const id="dl_8499fc6c2af9f7b2e166";
export const url=new URL("../icons/online_prediction-fill.svg?v=713e578fae265df4be3bb0a14d20eb2f724dfc560572ffe0a6041255bb7759f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
