export const name="no_food-fill";
export const id="dl_6a8a4c7d8ae0f98028fb";
export const url=new URL("../icons/no_food-fill.svg?v=e08821e4a8083fb09ad462196ac6c9b45e05e21df0fa1d979c0c52e6efc4f618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
