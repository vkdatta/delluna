export const name="list-plus";
export const id="dl_310bf65fba224906b315";
export const url=new URL("../icons/list-plus.svg?v=1527cba18f1698c3ff6896ae1d6ca8c3cbadb72bf074710696d15b4f93caa5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
