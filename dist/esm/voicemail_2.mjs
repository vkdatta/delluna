export const name="voicemail_2";
export const id="dl_fb1c3b700d50784ec3fb";
export const url=new URL("../icons/voicemail_2.svg?v=ad5bdda41f99944ea32c835ccbb458cf5c6305587300317e358dd02197998d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
