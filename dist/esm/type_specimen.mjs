export const name="type_specimen";
export const id="dl_57e2c1fdadcd30c5dbf6";
export const url=new URL("../icons/type_specimen.svg?v=0c8ef6b58708721514866eb9cadae4a2b1e64a8d2c7aa406edf20bc6e4f673d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
