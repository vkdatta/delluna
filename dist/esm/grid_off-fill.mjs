export const name="grid_off-fill";
export const id="dl_c7ac389640497da65a26";
export const url=new URL("../icons/grid_off-fill.svg?v=394867f4076ff9c7cc3152643001ae3a202cf6a8b4efd171667743359156df8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
