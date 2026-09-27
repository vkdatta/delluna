export const name="web_asset-fill";
export const id="dl_3ebb731585fff13f3785";
export const url=new URL("../icons/web_asset-fill.svg?v=8a4aeacf8e65623adbd98c98ff581924bd67795530c4a92fa3f9550f93a9a261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
