export const name="format_quote";
export const id="dl_061d87759f4a0915256d";
export const url=new URL("../icons/format_quote.svg?v=54c498c939ca6f3d3e0c2ef619a4fd523e3213544b9d3e2cfd7d66109c306ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
