export const name="stack-overflow-logo-bold";
export const id="dl_88085c8e9c2164506358";
export const url=new URL("../icons/stack-overflow-logo-bold.svg?v=d5576e5b9762135b794e79825ed560977f6aecd9fb8721281fb72b04ab49ecd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
