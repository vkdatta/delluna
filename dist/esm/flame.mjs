export const name="flame";
export const id="dl_96599f39126a48d4a7ae";
export const url=new URL("../icons/flame.svg?v=48ee36faf3fe2768c2f39dfa19ea82e2e80653d541574dbc8af0d3c6787cbf71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
