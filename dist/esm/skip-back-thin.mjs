export const name="skip-back-thin";
export const id="dl_a6af53b7eaf3450f863b";
export const url=new URL("../icons/S/skip-back-thin.svg?v=4ebac978208f8aa611a478f6dc29319ad75d250b5fb8f467c6379a373e580c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
