export const name="notification_audio";
export const id="dl_57a7f3e0b06b10cd5ff8";
export const url=new URL("../icons/notification_audio.svg?v=563289a6077c614c6bc697f2b8030694fc109d556f3fb42000502b0c7e6a922f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
