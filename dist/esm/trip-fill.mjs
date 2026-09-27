export const name="trip-fill";
export const id="dl_58c537d576e23fa4ef64";
export const url=new URL("../icons/trip-fill.svg?v=810ade8c556c8a4911dd1b4b40070eb6eaa38ee1dfa7534cf68cd35c66a1bae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
