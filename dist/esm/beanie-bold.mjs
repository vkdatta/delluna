export const name="beanie-bold";
export const id="dl_6455088c44dd484ea7cc";
export const url=new URL("../icons/beanie-bold.svg?v=bb3931b9182ad6590c1d43b2bdb8a2bc0def4ee7ca2fc072ea4a5f517a7a525d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
