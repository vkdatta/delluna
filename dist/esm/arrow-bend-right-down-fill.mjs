export const name="arrow-bend-right-down-fill";
export const id="dl_15c2b24868f74967bae6";
export const url=new URL("../icons/arrow-bend-right-down-fill.svg?v=528bf69a092037c67ec18cda3653c1a732a7094f435cd7063d50222e9dfcd3a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
