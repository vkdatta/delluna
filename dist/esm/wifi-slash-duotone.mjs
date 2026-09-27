export const name="wifi-slash-duotone";
export const id="dl_58d6c2c3a397001fac9d";
export const url=new URL("../icons/wifi-slash-duotone.svg?v=b4a42037ba713f590dfbff4397bf879a6531d3744a7eecd746ae8e051d824215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
