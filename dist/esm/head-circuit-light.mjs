export const name="head-circuit-light";
export const id="dl_405cdcb687c34a1cb3c5";
export const url=new URL("../icons/head-circuit-light.svg?v=2fd5fd12166de425599c7ce160b9306f162e2fce9d4e09f4eed8b491954c3a82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
