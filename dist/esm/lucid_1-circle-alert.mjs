export const name="lucid_1-circle-alert";
export const id="dl_01f6551a34d748c2bbdf";
export const url=new URL("../icons/lucid_1-circle-alert.svg?v=37007afd2741f211b148d9c06c18b6c7cc511c5d55bd7fac024f8265b2ae3e80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
