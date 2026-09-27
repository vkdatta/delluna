export const name="user-light";
export const id="dl_ab441b462099d5870c15";
export const url=new URL("../icons/user-light.svg?v=22e244d1c9c8671edb93a98846ee38cf38ebcc09c37614b741156d04af21a94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
