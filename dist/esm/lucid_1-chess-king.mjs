export const name="lucid_1-chess-king";
export const id="dl_838c5cfde9a647c88ad3";
export const url=new URL("../icons/lucid_1-chess-king.svg?v=b69fab2e03401cddf72bd72dea2edf7bb59e43b5e0e8871e0d10ae2744628ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
