export const name="lucid_2-magnet";
export const id="dl_8dc8a0c0b3fc4f48b4ea";
export const url=new URL("../icons/lucid_2-magnet.svg?v=6fbea76c77c3b67f135d98d0c06ba7208ce183c7a2f6cb015c3b27f198bee19b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
