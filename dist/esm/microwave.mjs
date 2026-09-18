export const name="microwave";
export const id="dl_4cfb34ba731d4658aff6";
export const url=new URL("../icons/M/microwave.svg?v=1ec2e25b87bb6f458821546050db3b38617a36a1218d2c07006172d29ba76597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
