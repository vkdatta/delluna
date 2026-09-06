export const name="lucid_1-award";
export const id="dl_92c839234acb41e796c2";
export const url=new URL("../icons/lucid_1-award.svg?v=20d02588e0ee1f865b02e454acc3f8d07fceaa3684512fcf1676a624ee55f71a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
