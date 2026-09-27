export const name="speaker_notes-fill";
export const id="dl_1b0ca8932a1a47018cf5";
export const url=new URL("../icons/speaker_notes-fill.svg?v=4b75a564664a40eeef3ca6040686146c54ef13bd13a30580316407c41a7daf14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
