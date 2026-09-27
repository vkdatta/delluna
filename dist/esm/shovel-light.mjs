export const name="shovel-light";
export const id="dl_551b5f694fe3db830f2d";
export const url=new URL("../icons/shovel-light.svg?v=0df327051d8ea13a0930cbdaf6057ae11b99577ec6d882359724565fac14b6de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
