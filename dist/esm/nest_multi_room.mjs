export const name="nest_multi_room";
export const id="dl_82ce8a17da654cc29e59";
export const url=new URL("../icons/nest_multi_room.svg?v=68a79d865388b56386449448cf666c509aeb98a2589cbeef15bcfb667fa31b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
