export const name="bell-simple-z-light";
export const id="dl_e5a5b91e510c47f2bc07";
export const url=new URL("../icons/bell-simple-z-light.svg?v=62c1ad899923b99e0c0f31f7de0429b7f173165978b83f749ebfc0f9f718b3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
