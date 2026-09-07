export const name="swerve";
export const id="dl_609927229d55448ea6ab";
export const url=new URL("../icons/swerve.svg?v=30f2b85aaf1da233c938aa7da2753223ab97897e4a8b4da4f94f0cb4dfdbe21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
