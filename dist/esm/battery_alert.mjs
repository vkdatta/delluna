export const name="battery_alert";
export const id="dl_57f84aec265c6e6a1775";
export const url=new URL("../icons/battery_alert.svg?v=11c19687e0f00a00c8da657e43b0e0d29c5e1669d4d64639ecc69bb7af62dd00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
