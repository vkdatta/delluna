export const name="lucid_1-baby";
export const id="dl_543cc6346d534ec4a129";
export const url=new URL("../icons/lucid_1-baby.svg?v=981ed23c1837ef1e2834c6ed0aa1f6de14d529b0c1425c14156f997b2859da21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
