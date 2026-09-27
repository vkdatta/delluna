export const name="lucid_1-alarm-smoke";
export const id="dl_5e80bbf048104de0932d";
export const url=new URL("../icons/lucid_1-alarm-smoke.svg?v=53d560ec6d030d5601b65376fcac4afd4b4720f7aed382e9bcff8c08cab1600b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
