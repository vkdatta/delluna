export const name="tree-view";
export const id="dl_797850261ea1a229f84e";
export const url=new URL("../icons/tree-view.svg?v=754070528dffe823117c9e840d97de21dc49db3c242a409a5bacf3701f4ea961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
