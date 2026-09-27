export const name="text-h-three-bold";
export const id="dl_ed3fba08f2a5ee7fbd7a";
export const url=new URL("../icons/text-h-three-bold.svg?v=8c2cdce6954e434a5feda15af661af0b366bb68d30420262f3b69ba6d7c356f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
