export const name="dataset-fill";
export const id="dl_6bf1726d8f644715992e";
export const url=new URL("../icons/dataset-fill.svg?v=25e11eb5198a7da6dd2479e8e755583f17b825b8842acfb9ce39d96ad06aacae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
