export const name="arrow-circle-left-light";
export const id="dl_ae1735466f3344459667";
export const url=new URL("../icons/arrow-circle-left-light.svg?v=7e1efe65863cc192159f385f8a1235619f64042e44d6131b0e3ad5ca9148a293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
