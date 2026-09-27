export const name="calendar-thin";
export const id="dl_0bdaeb4fd9b4434a96a2";
export const url=new URL("../icons/calendar-thin.svg?v=4315b90ed47822113c89bfc4f543ea1c37841a1bd2a969c8997ab1d549ecb99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
