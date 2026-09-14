export const name="action_key-fill";
export const id="dl_3fa355dc777d49b2ac99";
export const url=new URL("../icons/A/action_key-fill.svg?v=1eb1569a5945ed8d33dcc5956e890e12f1323ecb2137bef88c1868065bcad196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
