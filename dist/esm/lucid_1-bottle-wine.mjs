export const name="lucid_1-bottle-wine";
export const id="dl_049ef70374624d54a559";
export const url=new URL("../icons/lucid_1-bottle-wine.svg?v=f18ba8949162a764da5b2f647c9b0094fb263c76be126100d739c707eb0078ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
