export const name="backpack";
export const id="dl_3e91226480f84b99994e";
export const url=new URL("../icons/backpack.svg?v=ec51f6706145d14c7e520f21f18e57d5753ca71ff98ce1ed34681265cd86c374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
