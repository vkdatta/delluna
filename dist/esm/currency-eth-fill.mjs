export const name="currency-eth-fill";
export const id="dl_7540f0f0faae4d2daaf4";
export const url=new URL("../icons/currency-eth-fill.svg?v=499a0f60046e0391b9617d8a66a50f2e370d319abc2eb8fdeaa6389c3b104161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
