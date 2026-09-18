export const name="picture_in_picture_alt";
export const id="dl_aeb2e05f6979435fb67d";
export const url=new URL("../icons/picture_in_picture_alt.svg?v=17b9b5779445dfba944b8595dc37df871ee00473d199f3f54e74a1459a1d9546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
