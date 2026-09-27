export const name="lucid_1-case-lower";
export const id="dl_7532debb23964b36bc38";
export const url=new URL("../icons/lucid_1-case-lower.svg?v=22aa080184791b96f80fe0e3f7571318b5a50d71c6e5383cf749755cd1ec9650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
