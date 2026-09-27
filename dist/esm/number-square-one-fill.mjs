export const name="number-square-one-fill";
export const id="dl_f1f50240d5004ce396ee";
export const url=new URL("../icons/number-square-one-fill.svg?v=afc27c31c72348997da03d9d76c805fab83a047925e161af1c71032110e5e4a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
