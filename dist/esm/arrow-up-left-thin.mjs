export const name="arrow-up-left-thin";
export const id="dl_d28003c625e0473b82f0";
export const url=new URL("../icons/arrow-up-left-thin.svg?v=9816a3d5f583772d6e68773a2febaccb0e0607389ea0bf0db0956b2dc3570b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
