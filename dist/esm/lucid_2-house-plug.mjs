export const name="lucid_2-house-plug";
export const id="dl_6afc69ce5ce74f71bb2b";
export const url=new URL("../icons/lucid_2-house-plug.svg?v=3fae9368cab72f1f6e4bfacba8909ca4eca94f19d1324001592f0feeaf48f1f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
