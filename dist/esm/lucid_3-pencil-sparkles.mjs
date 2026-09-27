export const name="lucid_3-pencil-sparkles";
export const id="dl_5e609697054c4f2b857b";
export const url=new URL("../icons/lucid_3-pencil-sparkles.svg?v=bd817a0208396282404dc8a5cb82c49c7795c922bb78f31b486f4af7f4e7d7b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
