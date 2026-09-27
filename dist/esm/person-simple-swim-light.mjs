export const name="person-simple-swim-light";
export const id="dl_ff0df21bb7d5410e9940";
export const url=new URL("../icons/person-simple-swim-light.svg?v=e330ee682d8013e76d1ab9f72c4e7a9efa372cf360645315f2cb27799eb820c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
