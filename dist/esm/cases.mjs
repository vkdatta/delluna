export const name="cases";
export const id="dl_0cde7145236a94efba12";
export const url=new URL("../icons/cases.svg?v=2af8e2a2b95b9eeca1d04b841b3b7b138e8df4de8718e097a466ae409d588697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
