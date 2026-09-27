export const name="caret-right-duotone";
export const id="dl_801b8b91f5014b81a3b0";
export const url=new URL("../icons/caret-right-duotone.svg?v=6fe8eebb4b7b8f500fb1a042bf3c41e629dcc9f9358ba89715083530ce73c301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
