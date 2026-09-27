export const name="phone-slash-bold";
export const id="dl_ac86b4a04ec5489c9c3a";
export const url=new URL("../icons/phone-slash-bold.svg?v=bbb90d7e883515989acd5117fb52dc264a6ed28e9bcfc0cd96906d220c97b265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
