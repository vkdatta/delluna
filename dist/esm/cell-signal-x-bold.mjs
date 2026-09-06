export const name="cell-signal-x-bold";
export const id="dl_cebd5ed84c444a25813e";
export const url=new URL("../icons/cell-signal-x-bold.svg?v=19956ff21751cd6d29621b18f34b89b192c132344dc96d8deef913af6fbc1bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
