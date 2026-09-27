export const name="battery_plus-fill";
export const id="dl_54161050353ee1063d9d";
export const url=new URL("../icons/battery_plus-fill.svg?v=c4f699c718645a74121340c328ee4a9a68024373166be618a316be385703e8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
