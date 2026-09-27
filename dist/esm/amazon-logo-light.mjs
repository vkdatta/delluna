export const name="amazon-logo-light";
export const id="dl_ea69d4c45d594439a4aa";
export const url=new URL("../icons/amazon-logo-light.svg?v=dfcd6635f5d8d9d2944b5c735a0131c52ed85ba3ddf077fc719d66a0a6fc3016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
