export const name="thermometer-cold-bold";
export const id="dl_7dc354ad84488b951cfa";
export const url=new URL("../icons/thermometer-cold-bold.svg?v=b66a6b805b2689f6f44682da6e899caef12dfce083f84e036a4029ca9b5322f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
