export const name="flow-arrow-duotone";
export const id="dl_fd6cec0295cf4c358f2a";
export const url=new URL("../icons/flow-arrow-duotone.svg?v=80572d282af51ff9dfe14418cad92080fca5ec9e7832dd085b7ef1d79fc853ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
