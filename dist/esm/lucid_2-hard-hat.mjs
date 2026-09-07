export const name="lucid_2-hard-hat";
export const id="dl_65fb64b3eb7e4f728857";
export const url=new URL("../icons/lucid_2-hard-hat.svg?v=783bbc7e283702e1ac416c32234f2ee164d17acd0150159a70600f64de1e5913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
