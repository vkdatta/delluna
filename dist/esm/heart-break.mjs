export const name="heart-break";
export const id="dl_8c1a34f102634712873e";
export const url=new URL("../icons/heart-break.svg?v=483d686dd1d914342e49ac53345295e0181efeca10cee4785d673cbcd11ea292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
