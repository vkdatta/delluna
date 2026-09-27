export const name="cowboy-hat-fill";
export const id="dl_a3be563289814337a772";
export const url=new URL("../icons/cowboy-hat-fill.svg?v=33fc9ffe17b73ecb4983ba08f27990a20239b1da8feec5052ade6658392cd8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
