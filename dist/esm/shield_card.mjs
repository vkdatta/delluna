export const name="shield_card";
export const id="dl_3a70dfcb8c8e0a9d36bf";
export const url=new URL("../icons/shield_card.svg?v=e495a4bd6a19e5de0ce24c3ec61307530e46ac5cd9abb8a3b8162f0d63c28278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
