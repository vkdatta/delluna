export const name="table_lamp-fill";
export const id="dl_69d662390c2be31760b8";
export const url=new URL("../icons/table_lamp-fill.svg?v=51af4e332a434f22fd5958086983902b246eace2bccfcc2c1fe53ad2356087d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
