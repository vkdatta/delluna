export const name="extension-fill";
export const id="dl_0e4316b047dbdac97f27";
export const url=new URL("../icons/extension-fill.svg?v=15b1dd5bf4340456e44fcc6394df4e7bd35862e6cf32723b009a0a7d5e1160ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
