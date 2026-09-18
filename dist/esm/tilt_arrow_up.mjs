export const name="tilt_arrow_up";
export const id="dl_7dd0a3b4bcda49b09ad6";
export const url=new URL("../icons/T/tilt_arrow_up.svg?v=c35a5b00776d7d2fa0fd5d5003e399fad1fa63a99343b2c092402e3ba770a044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
