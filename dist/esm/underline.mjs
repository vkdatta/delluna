export const name="underline";
export const id="dl_d990962978f0468aa298";
export const url=new URL("../icons/underline.svg?v=9b8198bd02b39ea2eb4fec2b407e44cca68d7ce97fd0c70690ab06bacb1e8f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
