export const name="picture_in_picture_alt";
export const id="dl_ee5ce3e3d0e17d60d03c";
export const url=new URL("../icons/picture_in_picture_alt.svg?v=75961e41605633675eccf993a4b27173935876933530d0c1f76546545674b502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
