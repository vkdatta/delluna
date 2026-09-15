export const name="exit_to_app-fill";
export const id="dl_02c5e3e434fd4151bd11";
export const url=new URL("../icons/E/exit_to_app-fill.svg?v=89f503364950af46bdd8c47b7d55360a06c1e5dd6fd6fc8fa19ac4f03a91ae13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
