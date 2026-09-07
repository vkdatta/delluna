export const name="shield-slash-duotone";
export const id="dl_06dc2ca07aec44039d4f";
export const url=new URL("../icons/S/shield-slash-duotone.svg?v=f79aa2f036dc1021efd7b75ff9f3710be57e629ea86dd6fa464bb1bfee7634d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
