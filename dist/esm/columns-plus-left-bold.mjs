export const name="columns-plus-left-bold";
export const id="dl_4512818de9294c88b921";
export const url=new URL("../icons/columns-plus-left-bold.svg?v=8c2a1c78ba39d70f661b4af3c09b35803eab733ee6652cd4176d1dc54bd3d12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
