export const name="stylus_laser_pointer-fill";
export const id="dl_f561b67bdedd41f8bb9d";
export const url=new URL("../icons/stylus_laser_pointer-fill.svg?v=b3249b9135062b9c7945dfbe9c12cbda11a9517e1a236795d2b89a35c521c2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
