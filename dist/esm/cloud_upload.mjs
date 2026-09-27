export const name="cloud_upload";
export const id="dl_5673ca481d5b5ecba804";
export const url=new URL("../icons/cloud_upload.svg?v=f6b64ae1549fa01d71ff5efde108162ea4d4dc96d04d24c326f71999a9391141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
