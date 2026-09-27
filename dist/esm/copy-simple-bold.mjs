export const name="copy-simple-bold";
export const id="dl_61874f016e0b4577933a";
export const url=new URL("../icons/copy-simple-bold.svg?v=be50fb6e13745d8af37d9aece85fe6bf9e654a04226963856fcc563501dcfb7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
