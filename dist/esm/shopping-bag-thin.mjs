export const name="shopping-bag-thin";
export const id="dl_1e124d5244cca219f6ec";
export const url=new URL("../icons/shopping-bag-thin.svg?v=091f37def2372fd4d5aefbf11c7f4de4207e6cf75c48c27d69d46f66ae00b2ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
