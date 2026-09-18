export const name="bookmark_add-fill";
export const id="dl_08751397835940f48caf";
export const url=new URL("../icons/bookmark_add-fill.svg?v=68996549d7cd7c0c6c18151a938197b3116c73697c1fcca1bfe8a39ac4b2364b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
