export const name="circuitry-thin";
export const id="dl_a5f026dda3ec4a34975d";
export const url=new URL("../icons/circuitry-thin.svg?v=4218720e5d9ae95ee92d7c5434568b445ec751825d25d38da33cdd61d1be0a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
