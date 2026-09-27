export const name="public-fill";
export const id="dl_e3b45f461cd49d21571b";
export const url=new URL("../icons/public-fill.svg?v=6584321cda0266dfc63c362559fbb57d3689fc037dba7d4c398d536d659b1564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
