export const name="shopping_bag";
export const id="dl_27323c6ecee247c6b6d8";
export const url=new URL("../icons/shopping_bag.svg?v=20376d28ac67e29f51769c6224755a4304a7149385456c6dda39975ad81ae2ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
