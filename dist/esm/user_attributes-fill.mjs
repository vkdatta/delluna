export const name="user_attributes-fill";
export const id="dl_c0534f3cb0ed654dd8b9";
export const url=new URL("../icons/user_attributes-fill.svg?v=e881d7aed4df0f08a8eb0f47093783e79c2ea598e8b3233365c022d9da393866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
