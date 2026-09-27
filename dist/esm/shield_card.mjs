export const name="shield_card";
export const id="dl_0f9a4d48719957584e1f";
export const url=new URL("../icons/shield_card.svg?v=ffbe8a71591fe612459e45b12d6713d810c94d7dcbbe67b86d18e9fe8de11b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
