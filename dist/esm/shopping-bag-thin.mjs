export const name="shopping-bag-thin";
export const id="dl_034caf145c84d197e4f8";
export const url=new URL("../icons/shopping-bag-thin.svg?v=c861df456089cb03406400f6b796ccc2a3f1ffc86c13ad04af6ca5794d0f5e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
