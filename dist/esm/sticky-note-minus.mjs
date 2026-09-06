export const name="sticky-note-minus";
export const id="dl_67318d6f555149238915";
export const url=new URL("../icons/sticky-note-minus.svg?v=ac129fb26a0bd622e42478b722473e20c84fb05c1a8626334b8bf08ce8a2d975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
