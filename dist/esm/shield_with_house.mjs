export const name="shield_with_house";
export const id="dl_3b847406f5a6ae45de0e";
export const url=new URL("../icons/shield_with_house.svg?v=35d6f1164bc7bb753e39e2f2a1c893b6728c0ed0fb1ce8e3b3683313ca83d16f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
