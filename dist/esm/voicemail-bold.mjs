export const name="voicemail-bold";
export const id="dl_ad9a47d73904fa37b7c0";
export const url=new URL("../icons/voicemail-bold.svg?v=633ce796baa884a5a156148a36bcdfe3e3cbbc209d9146c5575094e5e2de26e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
