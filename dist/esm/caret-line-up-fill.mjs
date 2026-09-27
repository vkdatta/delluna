export const name="caret-line-up-fill";
export const id="dl_4d594faf9582467c844b";
export const url=new URL("../icons/caret-line-up-fill.svg?v=2687c32928730e29507737dae582a806197a0fa827c545f3952c493c5d3e07b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
