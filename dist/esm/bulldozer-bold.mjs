export const name="bulldozer-bold";
export const id="dl_ae3b5d027d73497da149";
export const url=new URL("../icons/bulldozer-bold.svg?v=6d3e1dabb30806c19658f98bf926788586fe412364c84092bfb87d09c3936096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
