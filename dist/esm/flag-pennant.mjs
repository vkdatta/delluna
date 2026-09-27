export const name="flag-pennant";
export const id="dl_61fe040a7055474abab7";
export const url=new URL("../icons/flag-pennant.svg?v=88976386d2c881d53f34ba86c06d2830bd712eb83dbb885ed489b1fff898f918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
