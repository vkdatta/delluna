export const name="diamonds-four-fill";
export const id="dl_140365f6f7c54c4b9df3";
export const url=new URL("../icons/diamonds-four-fill.svg?v=f1c2c476ba065be866fe76b743c912338290eb98225657d530d26e8d98dbd13a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
