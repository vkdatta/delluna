export const name="nest_secure_alarm-fill";
export const id="dl_b4ed79199f6a5b63ec88";
export const url=new URL("../icons/nest_secure_alarm-fill.svg?v=2db64dc0dd070d8b0ddd3b04006c384f1a6452d493520586cc3fdd3236b3990a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
