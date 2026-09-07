export const name="notches-light";
export const id="dl_a84676f474084fc3aed4";
export const url=new URL("../icons/notches-light.svg?v=3796aaaae939ee7273db9e91d76f381fd18d8233f61a4a3164ca193d1b4207e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
