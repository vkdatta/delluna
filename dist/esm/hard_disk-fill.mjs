export const name="hard_disk-fill";
export const id="dl_6da1711faf26bff5ef49";
export const url=new URL("../icons/hard_disk-fill.svg?v=6c186b212cbaac1b7e8e8fbda314530e0361969015b0e4cf4cfe2dc4e245541e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
