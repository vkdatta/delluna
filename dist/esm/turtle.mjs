export const name="turtle";
export const id="dl_b8bf166d818847da97b0";
export const url=new URL("../icons/turtle.svg?v=3ea109f2d0bfe15f866cf35dfa41b7b95495c13d1ee3cead3e2271f3689d24eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
