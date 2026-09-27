export const name="aspect_ratio-fill";
export const id="dl_4bfecbca557c274e4644";
export const url=new URL("../icons/aspect_ratio-fill.svg?v=76fb4edef684ecd78d4b263df474e21c1b3bac919276e0b3527a6799cec97ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
