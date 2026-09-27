export const name="hands-praying-fill";
export const id="dl_9f1f4befa7aa4cf09717";
export const url=new URL("../icons/hands-praying-fill.svg?v=a1aa0d703b4ca9bb00e8518fff837304966c38461f825e5ba2496c698caf2a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
