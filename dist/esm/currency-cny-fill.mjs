export const name="currency-cny-fill";
export const id="dl_4486bc6aa5ab4a068afe";
export const url=new URL("../icons/currency-cny-fill.svg?v=7d67c67b943ea81e1046eae1a53799bc493bb790eb9ab0345cd7b157b6cb7959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
