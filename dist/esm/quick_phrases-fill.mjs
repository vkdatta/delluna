export const name="quick_phrases-fill";
export const id="dl_f14edecc3b6147918c69";
export const url=new URL("../icons/quick_phrases-fill.svg?v=c9cda05db2f3179d67af0f688a5cea1b16f1feaedd0ba5d3e88bd79dfaf8f2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
