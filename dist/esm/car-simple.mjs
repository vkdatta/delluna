export const name="car-simple";
export const id="dl_261453a4f2f74d1f8410";
export const url=new URL("../icons/car-simple.svg?v=b4f8a21d1fa8b32294e464d43420a587bd42160624c7fee60b342b189552ca01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
