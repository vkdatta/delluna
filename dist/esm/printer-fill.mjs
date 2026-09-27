export const name="printer-fill";
export const id="dl_81e985286ea14e58ab01";
export const url=new URL("../icons/printer-fill.svg?v=421d56a5f170cd75cdd7ea0dac7dc1834962f6b595a55d875fc56a67068a4824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
