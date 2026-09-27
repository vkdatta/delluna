export const name="lucid_2-drama";
export const id="dl_7f1c98dda42b4eeb837c";
export const url=new URL("../icons/lucid_2-drama.svg?v=095a22c78c9e06522010bd4af1178de0ba1b575eecfbfdd2a0a0b5ac4daa161d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
