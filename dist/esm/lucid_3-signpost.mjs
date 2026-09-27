export const name="lucid_3-signpost";
export const id="dl_c61a0d4015a64f2b8015";
export const url=new URL("../icons/lucid_3-signpost.svg?v=353070a2d18de4b6d8b93421b96b40276fbe5e670186131b5f609c714638f7ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
