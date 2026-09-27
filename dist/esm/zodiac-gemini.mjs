export const name="zodiac-gemini";
export const id="dl_a97159f7fb4740499c64";
export const url=new URL("../icons/zodiac-gemini.svg?v=b4b0710c82f572481fda5c831d61cd119c7a6b361160a0c82bc977f5754160d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
