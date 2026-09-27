export const name="asclepius-bold";
export const id="dl_37fe06f8f01844c7bf83";
export const url=new URL("../icons/asclepius-bold.svg?v=95a299b88c0c574e9437930c2931bc0ef5054aa84ce6669c66e639bb9f00153f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
