export const name="speaker-slash-duotone";
export const id="dl_1650ab45c64842ddba17";
export const url=new URL("../icons/S/speaker-slash-duotone.svg?v=cf749e86acd8c420c46582ee902ae8b5d86d7b49de46d5ac4968973dfb5cb86e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
