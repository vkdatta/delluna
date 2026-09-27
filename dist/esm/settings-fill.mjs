export const name="settings-fill";
export const id="dl_88eed20a805915ed4d5c";
export const url=new URL("../icons/settings-fill.svg?v=c4fbb1b1bf344e692e7cadc87754486aaeb55f33c5e6c94a8ea334187ce56f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
