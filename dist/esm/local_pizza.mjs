export const name="local_pizza";
export const id="dl_0b6220dd3f764a898212";
export const url=new URL("../icons/L/local_pizza.svg?v=dcc55419287eeba98caf130df68321a47afe1b83ef7fa775bcf1becbfdc54e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
