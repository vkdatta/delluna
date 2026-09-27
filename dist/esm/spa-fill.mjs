export const name="spa-fill";
export const id="dl_3ac8a044c591bb1c9430";
export const url=new URL("../icons/spa-fill.svg?v=37cb09a9b6e5908714353dc1c2a7a7524dd551aee6152af51a326c2e358acc21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
