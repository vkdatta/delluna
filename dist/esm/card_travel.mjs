export const name="card_travel";
export const id="dl_6436d051084e0c9cba87";
export const url=new URL("../icons/card_travel.svg?v=15bfac1bcb016cdec543d1f419f41859934555086858b8ac114ad44c03379671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
