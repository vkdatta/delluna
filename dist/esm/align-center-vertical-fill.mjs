export const name="align-center-vertical-fill";
export const id="dl_21975b96456640fe946a";
export const url=new URL("../icons/align-center-vertical-fill.svg?v=9efb3bf3b28fdc22918c3ff0b5ad148549f941782e37c686940423272e626a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
