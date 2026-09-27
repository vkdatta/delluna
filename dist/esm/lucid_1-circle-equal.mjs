export const name="lucid_1-circle-equal";
export const id="dl_0feed34b13f54ca39a98";
export const url=new URL("../icons/lucid_1-circle-equal.svg?v=3205a5fff6fc903fdbd308b92fad486f923be8a4fcbac7e0a8c2ac0a28d07417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
