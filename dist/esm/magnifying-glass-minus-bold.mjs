export const name="magnifying-glass-minus-bold";
export const id="dl_03a0d7f6a6b240e9becd";
export const url=new URL("../icons/magnifying-glass-minus-bold.svg?v=4a394195071838cd56bbd302d446c7b6027db201f97cac27393a765380dfd4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
