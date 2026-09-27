export const name="standard-definition-bold";
export const id="dl_a6649ed7f35de6a54348";
export const url=new URL("../icons/standard-definition-bold.svg?v=4c927fffc742656409923af69156efb7a2620762a0fe16d7736abca68ed36473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
