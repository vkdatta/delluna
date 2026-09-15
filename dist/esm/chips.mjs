export const name="chips";
export const id="dl_e14058160a0e44e98ca2";
export const url=new URL("../icons/C/chips.svg?v=7972f03dac465c9022a21b16f3609a283bc9ec06149fb52e465e7e989f97308f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
