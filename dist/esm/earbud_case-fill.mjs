export const name="earbud_case-fill";
export const id="dl_9e01f80cfada205b0d8c";
export const url=new URL("../icons/earbud_case-fill.svg?v=6e21c9e83a6e11c829428b5ad3e658a96ce85a5171141c51dadbf44e17864a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
