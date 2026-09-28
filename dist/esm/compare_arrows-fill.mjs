export const name="compare_arrows-fill";
export const id="dl_646c173455c780417bbf";
export const url=new URL("../icons/compare_arrows-fill.svg?v=eed4015833d092a750c3be72bbcd00d67b1f657662f7a71049ceb1206041ed95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
