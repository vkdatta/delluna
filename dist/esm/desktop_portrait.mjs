export const name="desktop_portrait";
export const id="dl_0ab9fc5d3c91f63318cd";
export const url=new URL("../icons/desktop_portrait.svg?v=0f6aad95f890d9c6615b67b0fb2b9239cc513f909b543cf7dfe9e54acab58019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
