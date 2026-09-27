export const name="article-ny-times-fill";
export const id="dl_eb19570125a94e3e8f86";
export const url=new URL("../icons/article-ny-times-fill.svg?v=c005001f8b12a2fd07a4735a97549895165b7fe1be4cfc6ba90b18d761bce292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
