export const name="sports-fill";
export const id="dl_c06efe2f88972b92c24d";
export const url=new URL("../icons/sports-fill.svg?v=74b9ba9450682741cb9168aef07793f93af2e5e444b37bc7857bbc9e66b761db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
