export const name="oxygen_saturation";
export const id="dl_58e7e3b636cd4ac27af3";
export const url=new URL("../icons/oxygen_saturation.svg?v=19d52eb65a6e382e98ed46471dfe38199586935ee2cf8bf502556bb50e31eb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
