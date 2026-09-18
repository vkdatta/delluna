export const name="phone_disabled-fill";
export const id="dl_7c59cd10b0a143399276";
export const url=new URL("../icons/phone_disabled-fill.svg?v=31eb1ad67538e51645dd80225f1b5ae53601ee42121e2a08529870af03648911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
