export const name="pill_off-fill";
export const id="dl_b601c333be59adbc3097";
export const url=new URL("../icons/pill_off-fill.svg?v=d65c8b67dbeb7685b6a3738060fa6154cce45feac41507aa3af15bb04f9755ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
