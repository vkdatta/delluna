export const name="file-doc-light";
export const id="dl_0882577dd03240918e26";
export const url=new URL("../icons/file-doc-light.svg?v=92f78da7704643512d81d8b90fa1d4268b02862f138595db09c676bbdd47689c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
