export const name="tree-palm-light";
export const id="dl_1e261c76d4c388e8c472";
export const url=new URL("../icons/tree-palm-light.svg?v=78dcadec89d890991ceb5c6bd18d02234e543d1098c1b5be2e5becbc87d03990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
