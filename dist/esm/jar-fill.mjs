export const name="jar-fill";
export const id="dl_90570785c03f4b2791ca";
export const url=new URL("../icons/jar-fill.svg?v=91f7d3c95c711748516cd815ca6147157ca88342dd91541ca121e0242d698a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
