export const name="user-x";
export const id="dl_be1fe404522d4c8faaa9";
export const url=new URL("../icons/user-x.svg?v=4d782c2cbce9d3616fe8dadb20566b080c5063ed826c857d291a9cc23134bc88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
