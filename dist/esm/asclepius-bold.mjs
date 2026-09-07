export const name="asclepius-bold";
export const id="dl_37fe06f8f01844c7bf83";
export const url=new URL("../icons/asclepius-bold.svg?v=5bb556ecf58bd9bed0624aef43e210afd8d4cad36754acaeea29ebbb86bff9a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
