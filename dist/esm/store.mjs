export const name="store";
export const id="dl_3d80b7d66e614b07b9b2";
export const url=new URL("../icons/store.svg?v=37a3fba7de8edc4b93f80228c54f2e21e52f7d6bd10b01d495d7ac144e3aeac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
