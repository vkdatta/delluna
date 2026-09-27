export const name="lucid_1-alarm-clock-minus";
export const id="dl_b4b1ee85ae5a47e9b203";
export const url=new URL("../icons/lucid_1-alarm-clock-minus.svg?v=1eb1fd6535f12ba62164868f5fd39a270748ed26386dbe31039f20dff6cc1e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
