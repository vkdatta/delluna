export const name="highlighter-circle-light";
export const id="dl_b0feae7dc841494589f8";
export const url=new URL("../icons/highlighter-circle-light.svg?v=47e3463a83b9749d378fc5e60f90907db58b9f644b17713d071a6383acc12d99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
