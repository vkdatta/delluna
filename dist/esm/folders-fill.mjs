export const name="folders-fill";
export const id="dl_bec0536361364332b2e5";
export const url=new URL("../icons/folders-fill.svg?v=dd9b1b039f26cd6694a7fc0daa8799724b141f0fbfef088f7f67bd50416799bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
