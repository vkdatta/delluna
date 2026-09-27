export const name="calendar-dot-thin";
export const id="dl_ccc53fed3dbd4c438b2e";
export const url=new URL("../icons/calendar-dot-thin.svg?v=c699a9ef19da29572ce6de82ffd1a4bb255200be0814c1dabcc7e026b8aaeaba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
