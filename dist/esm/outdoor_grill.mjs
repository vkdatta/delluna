export const name="outdoor_grill";
export const id="dl_ebae13875e03839d2348";
export const url=new URL("../icons/outdoor_grill.svg?v=e5354484e7742c2ca97e3700696b7edcd5e231c49d905006b393ea363d844611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
