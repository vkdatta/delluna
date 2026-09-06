export const name="lucid_2-flask-round";
export const id="dl_2d69895fa12043a0aa13";
export const url=new URL("../icons/lucid_2-flask-round.svg?v=7dd8c2bc60292eff86c1c4ea81e802949c7bc55751a64303ccfa07c36a6f8ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
