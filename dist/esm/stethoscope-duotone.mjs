export const name="stethoscope-duotone";
export const id="dl_68ba9f0faf2b50e302fd";
export const url=new URL("../icons/stethoscope-duotone.svg?v=954b336b57560b2adb704c8fe089d52a10317d9514080352249f582e8af402fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
