export const name="subway-bold";
export const id="dl_57e8c7663743868abf64";
export const url=new URL("../icons/subway-bold.svg?v=5d6fa7f31a829689dae30f592669b09b2a48fe6116db5f0ab1c4d3eb798d51f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
