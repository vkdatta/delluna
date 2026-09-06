export const name="mountains";
export const id="dl_213086c249714186904d";
export const url=new URL("../icons/mountains.svg?v=dd6ccafa3d1cf2b38aa72158279e0d090ede7ae2ec278c6358ea98581f660448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
