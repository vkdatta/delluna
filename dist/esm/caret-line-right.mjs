export const name="caret-line-right";
export const id="dl_cf7693c9f37e404cad7a";
export const url=new URL("../icons/caret-line-right.svg?v=a6312c51e48d8e24b1990ad1d790e24dca2d8086c3cc0a6a4b86c41f1ffcb3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
