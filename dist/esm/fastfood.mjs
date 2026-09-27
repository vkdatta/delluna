export const name="fastfood";
export const id="dl_eadfe91401f192d6ebdf";
export const url=new URL("../icons/fastfood.svg?v=842dddd7e0049dea96e4ca52dc29f89246b3d1ae00fa74e9eca444aa49bba082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
