export const name="list-checks-thin";
export const id="dl_c2e256a6d6114adca949";
export const url=new URL("../icons/list-checks-thin.svg?v=264d298731b5f0d8d45ba0070114c9b0ee1c59979e109c196f7b6fe584182e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
