export const name="lucid_3-shirt";
export const id="dl_e877aaa23e824a25ba3a";
export const url=new URL("../icons/lucid_3-shirt.svg?v=ee2c377c58745b0451d82ec58dca8f188b5f1c8d28a6b4c47859c54bba46e2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
