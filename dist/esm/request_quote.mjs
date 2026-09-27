export const name="request_quote";
export const id="dl_62de626916734d13a2e8";
export const url=new URL("../icons/request_quote.svg?v=d1f2771f5205d7bd783f5c2a97ea7200648824d31364ebb826275d5c0171dca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
