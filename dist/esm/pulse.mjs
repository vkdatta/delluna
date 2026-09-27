export const name="pulse";
export const id="dl_0b7b1a73c5c445d58214";
export const url=new URL("../icons/pulse.svg?v=0005b9d726b8390dbc3c65758ecf0170509838a904ae88c5757f9d5f9efc4bdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
