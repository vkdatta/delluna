export const name="subtitles-slash";
export const id="dl_fc83ad89bc7225de1e50";
export const url=new URL("../icons/subtitles-slash.svg?v=087493e3176042de8fd2c50c49e5535b63935c1649f802813c6993fe7b2f9403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
