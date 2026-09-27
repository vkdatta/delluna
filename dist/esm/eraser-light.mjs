export const name="eraser-light";
export const id="dl_8420b27accdf4f62b636";
export const url=new URL("../icons/eraser-light.svg?v=9ffa01e6840d933bab7955d8ae781baea19ffddb738e58a3097bd40502183522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
