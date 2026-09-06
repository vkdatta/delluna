export const name="money-wavy";
export const id="dl_ec04d68d037b4ea19f78";
export const url=new URL("../icons/money-wavy.svg?v=2c5d3dd610130db24aa979b7121d0dc44e6257a7a7026a848f5c1ecef64ac902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
