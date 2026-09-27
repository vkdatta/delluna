export const name="notification_audio-fill";
export const id="dl_388ca90691b6342da5b9";
export const url=new URL("../icons/notification_audio-fill.svg?v=b762c808f5ec591244e2132fa91ae1afa0b11e1170f0aa116c1887894f2ec298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
