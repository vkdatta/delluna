export const name="flip_to_front-fill";
export const id="dl_d92519ba5f34c8a5dec5";
export const url=new URL("../icons/flip_to_front-fill.svg?v=d9bad9b2387ea13bc97464802c016d8a6e6eacac256e306db44ce42d6217fcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
