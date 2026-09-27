export const name="lucid_3-square-arrow-left";
export const id="dl_c4bc146b6e2747bfaa7f";
export const url=new URL("../icons/lucid_3-square-arrow-left.svg?v=a1b40ac6a9cac0eacc29311b8c7043f4e51a711302d6ba2600fb44d20a6b689e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
