export const name="zodiac-gemini";
export const id="dl_a97159f7fb4740499c64";
export const url=new URL("../icons/zodiac-gemini.svg?v=adecd500621468835b656ebf4befd1a51427cc5699bcd01621752a889dc003b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
