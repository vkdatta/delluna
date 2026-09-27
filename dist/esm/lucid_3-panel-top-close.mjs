export const name="lucid_3-panel-top-close";
export const id="dl_8fa3ff1146354206bf12";
export const url=new URL("../icons/lucid_3-panel-top-close.svg?v=20a2c6503cb4460ced3ffbc6b3282853456e12b98c0897bc2628df7578fc2aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
