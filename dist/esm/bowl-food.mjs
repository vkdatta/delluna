export const name="bowl-food";
export const id="dl_492594dd49104bf9a0c5";
export const url=new URL("../icons/bowl-food.svg?v=1e5baf09f1844f4f314944b1d42882508248dbd2e87f0f0059e9ac57918b85cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
