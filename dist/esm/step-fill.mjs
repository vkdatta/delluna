export const name="step-fill";
export const id="dl_7509225ccab440419c74";
export const url=new URL("../icons/step-fill.svg?v=e159247ed4062ddcd1a9f78ebbf397aa00bd30b44f645424e65704450224216a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
