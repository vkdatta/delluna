export const name="traffic-signal-thin";
export const id="dl_00b2eaf2cd874aa5850f";
export const url=new URL("../icons/T/traffic-signal-thin.svg?v=076635521a037b8d1459da1772cd0af9718552a7e5d306e7feb944bf152d1877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
