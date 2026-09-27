export const name="lucid_2-magnet";
export const id="dl_8dc8a0c0b3fc4f48b4ea";
export const url=new URL("../icons/lucid_2-magnet.svg?v=44034729da3a8988ce7657922d5ee337282cbb89c1c5f0018cf7e9a2b95f783f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
