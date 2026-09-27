export const name="sync_saved_locally-fill";
export const id="dl_1524b3dc8ba7d4271c45";
export const url=new URL("../icons/sync_saved_locally-fill.svg?v=e816077564e90a4de5d84dd3a651198e0d9dd4b224e3e20d9c1e834c11d16429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
