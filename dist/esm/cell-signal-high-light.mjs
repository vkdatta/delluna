export const name="cell-signal-high-light";
export const id="dl_f25e2004fe2a4578b341";
export const url=new URL("../icons/cell-signal-high-light.svg?v=034543f38200509320056b0008630738cd23dde361fbd6249ba8307f5f1b5baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
