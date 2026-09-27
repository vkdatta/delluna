export const name="square-split-horizontal";
export const id="dl_7acd7e23aa264c4284cc";
export const url=new URL("../icons/square-split-horizontal.svg?v=742c96bca80a7df3b37eb96caf82fb6d457b3fafd3c4cc0c7f1864cda6b6eeaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
