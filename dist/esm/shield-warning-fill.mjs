export const name="shield-warning-fill";
export const id="dl_2d725a4e860d46c1ad5e";
export const url=new URL("../icons/S/shield-warning-fill.svg?v=8c594562a5adfd9fcce1f76514b62e8c626c4c00d742a69aa51214bae0b4037f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
