export const name="arming_countdown-fill";
export const id="dl_a7cd9675289845059481";
export const url=new URL("../icons/arming_countdown-fill.svg?v=0edcdb7683e201c243dbfdd24ef1b329637062d414c0cfcb89b4f346cf8bfe90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
