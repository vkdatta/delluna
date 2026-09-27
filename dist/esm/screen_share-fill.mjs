export const name="screen_share-fill";
export const id="dl_94357f9a54faba93b643";
export const url=new URL("../icons/screen_share-fill.svg?v=3f4fe8582939f34a1fb9c7c6774aa18b4138711de7c4942dd6704a27f079b88b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
