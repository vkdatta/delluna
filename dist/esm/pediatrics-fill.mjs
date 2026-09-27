export const name="pediatrics-fill";
export const id="dl_83796502dc66605f31a7";
export const url=new URL("../icons/pediatrics-fill.svg?v=b788da966eb7cbdb6984fe745939a0cbdd73fcaa1b8d180100e798cbca865960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
