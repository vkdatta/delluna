export const name="ny-times-logo-fill";
export const id="dl_d5212f533e214e069c9e";
export const url=new URL("../icons/ny-times-logo-fill.svg?v=477d4e1dfd2789b3064ac2e0161a46c1515cd959aecaa1acad8a95f59e04dffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
