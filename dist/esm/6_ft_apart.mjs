export const name="6_ft_apart";
export const id="dl_2bbcdc7f4ead4c2174e9";
export const url=new URL("../icons/6_ft_apart.svg?v=7f2ddd2f303e097079d48edf81dbf597b8874cc7d01670d4e9674bacaa5d6598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
