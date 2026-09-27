export const name="fork-knife-light";
export const id="dl_8b2aeacbaed24afd816b";
export const url=new URL("../icons/fork-knife-light.svg?v=1249a9e6e403f1f3e83a69907999cc2aada184f686deee8382357ddbbb2f85e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
