export const name="feature_search-fill";
export const id="dl_5638021db65f43fdbf49";
export const url=new URL("../icons/F/feature_search-fill.svg?v=de7a20f623fcd2bc9c51acea4b364e49b2e071ae685b7dea4e188de097ae20d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
