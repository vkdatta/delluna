export const name="van-light";
export const id="dl_2b7a694e6df7dfd063f9";
export const url=new URL("../icons/van-light.svg?v=19da534dad0c8517ffa6bd1df6d95f91ef598274cfa4228ab801288e0e3ccacf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
