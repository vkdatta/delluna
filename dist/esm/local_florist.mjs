export const name="local_florist";
export const id="dl_e3cd175093a93fb036c8";
export const url=new URL("../icons/local_florist.svg?v=ee39d32e04fca1ceab590a016597e40f1844b7fdc141235b13011b0bf75c8d20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
