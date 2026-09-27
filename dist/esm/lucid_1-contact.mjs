export const name="lucid_1-contact";
export const id="dl_cf20d49fffc44176a053";
export const url=new URL("../icons/lucid_1-contact.svg?v=4a9c693b2e0cb89c6f4182ff05abf5d642b2781848d5b96988e13ee9036a2150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
