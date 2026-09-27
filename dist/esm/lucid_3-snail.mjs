export const name="lucid_3-snail";
export const id="dl_610da9e5ebd744f08340";
export const url=new URL("../icons/lucid_3-snail.svg?v=2310c976140e80b0b5e74d0f348a26ad525e427d145f4156bf375551185bc1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
