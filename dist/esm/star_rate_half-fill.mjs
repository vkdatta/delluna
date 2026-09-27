export const name="star_rate_half-fill";
export const id="dl_f8892ba544c9dae8309c";
export const url=new URL("../icons/star_rate_half-fill.svg?v=104ff358d5b8385e28aeeb51fb985a617c8f875c50b1c40a6ae18d805a7a6b6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
