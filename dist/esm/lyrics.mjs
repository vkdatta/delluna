export const name="lyrics";
export const id="dl_136f07f27ddd5a80261e";
export const url=new URL("../icons/lyrics.svg?v=755697eb9ee5270fc44234ed6e70d0ed68031d67912ec0c8989101692290104b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
