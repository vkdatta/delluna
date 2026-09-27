export const name="mountain_flag-fill";
export const id="dl_13fcafe7969f957ab39c";
export const url=new URL("../icons/mountain_flag-fill.svg?v=f6760b97d56c3af49d9f72fd5ae9444e6a29540d8739e9e56e0310d83cbe7688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
