export const name="lucid_3-milk";
export const id="dl_5c187142ff9a4e37962f";
export const url=new URL("../icons/lucid_3-milk.svg?v=31d9b67fb469f2ae9058621c97331d64056265c6815045b2c4b50439bf7691b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
