export const name="heart_minus";
export const id="dl_4d889e72a6c7fc8fd46f";
export const url=new URL("../icons/heart_minus.svg?v=e801a505cb171405eb4db77be79d792ed7c1ae9c17a708fbd08a6e3b9f4078eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
