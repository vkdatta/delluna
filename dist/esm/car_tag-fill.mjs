export const name="car_tag-fill";
export const id="dl_e32862093b5c4561b574";
export const url=new URL("../icons/car_tag-fill.svg?v=f1baf539c50dfa544b607b4427b059f5ec429fab205752b66aae51b47bd997ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
