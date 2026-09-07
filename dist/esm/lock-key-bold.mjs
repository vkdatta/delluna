export const name="lock-key-bold";
export const id="dl_b516c1ce1bcb4e72ba43";
export const url=new URL("../icons/lock-key-bold.svg?v=87e1b9d9669d02387d9f8e82684dea5b867c7b581e531660308d59225a256b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
