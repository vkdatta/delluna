export const name="stroke_partial-fill";
export const id="dl_19a5de0701c1a6884710";
export const url=new URL("../icons/stroke_partial-fill.svg?v=6576a8e0135273e9f048feaba1a80d32428c63e40884ff53e1ef635653605644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
