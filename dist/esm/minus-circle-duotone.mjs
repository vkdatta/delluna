export const name="minus-circle-duotone";
export const id="dl_43fe570feb214dacb0ad";
export const url=new URL("../icons/minus-circle-duotone.svg?v=ef3eae6db0446538203a5bc7a494d51586c26224f5c9b11f0a234de042b635b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
