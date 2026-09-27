export const name="heart_plus-fill";
export const id="dl_7cd766f219def1beb1b2";
export const url=new URL("../icons/heart_plus-fill.svg?v=28d81b380f1011c0e6553c0288e8d4467e9b097662b9712bf9b85529a35828f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
