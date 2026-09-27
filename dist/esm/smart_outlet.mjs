export const name="smart_outlet";
export const id="dl_d05e23b680846b0f4788";
export const url=new URL("../icons/smart_outlet.svg?v=5628c1f208d467e0b76d0046b2b4e0b82063429b6d7c0ab789a6862fa19847b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
