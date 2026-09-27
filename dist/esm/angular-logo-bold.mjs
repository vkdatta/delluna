export const name="angular-logo-bold";
export const id="dl_2b87b4d0130b468bb416";
export const url=new URL("../icons/angular-logo-bold.svg?v=6fbd31470acd1116f955fcbc5e7d894cd2b3c5d302d95a9988beb9d83c6d1146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
