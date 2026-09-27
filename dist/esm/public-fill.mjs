export const name="public-fill";
export const id="dl_9774edc0ac926c53c4d5";
export const url=new URL("../icons/public-fill.svg?v=70a84f4a5621f9bf2ab434d7cd7c38d3ed79db0d806584bb452bc4995c3f6dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
