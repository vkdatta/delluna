export const name="shopping_bag-fill";
export const id="dl_b82be0d77f8f8221a6bc";
export const url=new URL("../icons/shopping_bag-fill.svg?v=041a0baded1fa8714c9687d9ff958891a2e912269e8e87e78850175597233b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
