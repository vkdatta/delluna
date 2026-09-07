export const name="trash-duotone";
export const id="dl_66348fe1157d46c0a790";
export const url=new URL("../icons/T/trash-duotone.svg?v=a027137fcada51425999e4305ef8c9baec2328364c092fe94b48fa9eec7adc6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
