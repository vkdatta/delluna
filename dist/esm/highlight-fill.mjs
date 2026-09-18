export const name="highlight-fill";
export const id="dl_57ce979875fc414f8fda";
export const url=new URL("../icons/highlight-fill.svg?v=ed2ea68faf36679af2e6f96491598612ab6bd94f6d9b9bff762a4d025041127a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
