export const name="lucid_1-calculator";
export const id="dl_4b87c1eda3f444ac9578";
export const url=new URL("../icons/lucid_1-calculator.svg?v=a48b600c8d97bd1b2dc4fc7d36ac560cf451aee68f997f1f9e840990ea70e728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
