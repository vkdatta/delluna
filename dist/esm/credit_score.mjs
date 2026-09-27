export const name="credit_score";
export const id="dl_dbf3ff1681151895dad0";
export const url=new URL("../icons/credit_score.svg?v=45a9330dc2affd856b2a8fccc470819674b620007e1bbf91261f02ecac89b082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
