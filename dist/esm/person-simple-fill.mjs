export const name="person-simple-fill";
export const id="dl_072851fb8c984bac909a";
export const url=new URL("../icons/person-simple-fill.svg?v=0fb31f0b2e95d2f72e0f44a3f960b23d8c2602d4c06973a601994ecbb2fb80d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
