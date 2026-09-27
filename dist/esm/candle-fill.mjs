export const name="candle-fill";
export const id="dl_3ad29907e4397252afa0";
export const url=new URL("../icons/candle-fill.svg?v=34c6e7ef581132204c2fa15fcc773b26ad8ceb301287f6a82cbe3e41d3d0cf31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
