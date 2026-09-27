export const name="pulse-fill";
export const id="dl_ab6a8f675024456a977a";
export const url=new URL("../icons/pulse-fill.svg?v=aac81de26b9126fb1d8c865ad7f824fb5e7d92c98b9181c3459c3ff0979a23b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
