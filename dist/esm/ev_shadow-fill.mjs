export const name="ev_shadow-fill";
export const id="dl_3c6b8f15d8e01117d921";
export const url=new URL("../icons/ev_shadow-fill.svg?v=2c4be97cd469f18a7c34f14b2902b3a9ffb853ea22bd342e795d993877acd885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
