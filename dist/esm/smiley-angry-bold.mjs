export const name="smiley-angry-bold";
export const id="dl_d35bcf9cedef4168b2ca";
export const url=new URL("../icons/S/smiley-angry-bold.svg?v=e422c1e52a0e46e7c2d754456cb4931fd60ee2929f77cd6abfe0e9ba189a190c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
