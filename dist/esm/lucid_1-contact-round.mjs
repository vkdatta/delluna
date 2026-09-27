export const name="lucid_1-contact-round";
export const id="dl_21ab568ba1444c5b8e3d";
export const url=new URL("../icons/lucid_1-contact-round.svg?v=5a36389816100e494855245c143e3612959833086b17b6d69b46dd4d1e7f901d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
