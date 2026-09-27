export const name="scissors-light";
export const id="dl_750fa64c2d0319646e17";
export const url=new URL("../icons/scissors-light.svg?v=455248823523f7b30e106635090fec520a4ca2c36703bc0e18e3c345273b54f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
