export const name="arrow-circle-up-left-bold";
export const id="dl_e736fefd2186481f9f1c";
export const url=new URL("../icons/arrow-circle-up-left-bold.svg?v=1b768ba4249f851d74ed1a0b51d6fa8cb0f6e2ceb2cb01466474ae88dd8a2572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
