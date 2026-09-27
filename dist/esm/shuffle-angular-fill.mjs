export const name="shuffle-angular-fill";
export const id="dl_1982d05d2a4ee3d23ff8";
export const url=new URL("../icons/shuffle-angular-fill.svg?v=7d5399dd3b16a1ce301d6a1452ff8fdd12568f39b37eac5e2d09170c05409dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
