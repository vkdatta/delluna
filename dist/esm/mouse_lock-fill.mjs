export const name="mouse_lock-fill";
export const id="dl_fa079022a04e87fb2a57";
export const url=new URL("../icons/mouse_lock-fill.svg?v=7a13fbb0c7d81f6cb041f0a424d7d1c74f746987e2ad3073081e945382b29a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
