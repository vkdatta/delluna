export const name="tray";
export const id="dl_9f4c93c710d2433194dc";
export const url=new URL("../icons/T/tray.svg?v=2fbf5c1b17b8b0aa58445720164692b2220092a4f61be440c54d83f7e16ceebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
