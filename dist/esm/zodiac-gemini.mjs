export const name="zodiac-gemini";
export const id="dl_a97159f7fb4740499c64";
export const url=new URL("../icons/zodiac-gemini.svg?v=f18798e97be4e826565074444f9a479ab78373eb95f53f87a46a7ca8d52c8d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
