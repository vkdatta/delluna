export const name="voicemail-duotone";
export const id="dl_328f527cd3cef7ac60e5";
export const url=new URL("../icons/voicemail-duotone.svg?v=86e52ecb0c8cb80d33c13f66637cda904104970a04713bcb01a9f26b18585666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
