export const name="lucid_3-signpost";
export const id="dl_c61a0d4015a64f2b8015";
export const url=new URL("../icons/lucid_3-signpost.svg?v=eb8a8e5e45181f543d46a305f6922806d6bdd7418ee6720db50c9830e2b2d352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
