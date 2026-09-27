export const name="home_pin";
export const id="dl_c07020086aceac57801d";
export const url=new URL("../icons/home_pin.svg?v=aa13c7e57a63b44d4316739fbe90346c9f9f8df6fd16dcffb29ded85fd5ffabd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
