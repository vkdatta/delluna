export const name="lightning-a-thin";
export const id="dl_f534e2a3aeaa4989b94c";
export const url=new URL("../icons/lightning-a-thin.svg?v=907ff096e876538daeca348aaaadc3802ad161a4f949a4f8d87af51c57c7c962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
