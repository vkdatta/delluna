export const name="aod_watch";
export const id="dl_2513df910071438ab02a";
export const url=new URL("../icons/aod_watch.svg?v=9e35d2c431f1add32eff46b9b00d1a5891a521e2c4abfacb96f0e966621c2975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
