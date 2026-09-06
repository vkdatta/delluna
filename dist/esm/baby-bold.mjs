export const name="baby-bold";
export const id="dl_2c0755145d5043489800";
export const url=new URL("../icons/baby-bold.svg?v=0f0b069930747a999c4520b450e8822b10805659b7733128d122187a1c516783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
