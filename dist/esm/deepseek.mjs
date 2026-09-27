export const name="deepseek";
export const id="dl_cfc590d397891af34e45";
export const url=new URL("../icons/deepseek.svg?v=e09caf8f18e5c77d279de7df064a3e1c3ecc8d614243301c87acc53d953c1276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
