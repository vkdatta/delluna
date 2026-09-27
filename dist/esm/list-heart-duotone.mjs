export const name="list-heart-duotone";
export const id="dl_8091256ea5d545bca344";
export const url=new URL("../icons/list-heart-duotone.svg?v=995b152602323e66e441f46a867d85ded2318ebd55156bfc6badbc0bf9e32356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
