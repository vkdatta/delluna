export const name="ripples";
export const id="dl_da04fcb603644cc7a69f";
export const url=new URL("../icons/ripples.svg?v=041124a314054495b267709a80096786a133fbc30be3fcb09f01967170363d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
