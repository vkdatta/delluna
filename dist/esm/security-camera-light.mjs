export const name="security-camera-light";
export const id="dl_93dc090ccf02ada70613";
export const url=new URL("../icons/security-camera-light.svg?v=ddd1433811b84baca615f72123fe342389a3f8cc24a8e5dbe94c4bdbc5a8f2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
