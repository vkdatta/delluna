export const name="aod_watch-fill";
export const id="dl_7d2ab12475554652a43c";
export const url=new URL("../icons/aod_watch-fill.svg?v=bd2a430b361fd4fc856a0a7be5f8f6de151f4c76bcb96be6c70b5647179b91b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
