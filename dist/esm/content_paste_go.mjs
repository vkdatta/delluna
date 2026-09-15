export const name="content_paste_go";
export const id="dl_a0d7b8cc104f4268b6df";
export const url=new URL("../icons/C/content_paste_go.svg?v=6137ed920696c2258c9990b0349dd813654d72045d2b43c8949cbb7add571f75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
