export const name="toll";
export const id="dl_261ab6d035e15e472d57";
export const url=new URL("../icons/toll.svg?v=555eebc70a28bf1486c85fe9355366606f352cc3ad83f9fd136305ba0ae4a7f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
