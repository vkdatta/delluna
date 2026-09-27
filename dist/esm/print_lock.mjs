export const name="print_lock";
export const id="dl_6a5abdf65f248e71c81b";
export const url=new URL("../icons/print_lock.svg?v=7abbb07d4aef1ef3c173364bfc1ccd843b0e847c44f12c7abedd30814a7ff144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
