export const name="lucid_1-arrow-down-to-dot";
export const id="dl_a33f30a36a6943a186d1";
export const url=new URL("../icons/lucid_1-arrow-down-to-dot.svg?v=9749785e475bcfcf6a69dde9374a31cf859362b78e844658413b907bd0d01469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
