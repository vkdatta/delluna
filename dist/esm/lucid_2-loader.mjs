export const name="lucid_2-loader";
export const id="dl_f027c227f5444b3e9374";
export const url=new URL("../icons/lucid_2-loader.svg?v=878424ee3e614d82a6780c68beda79aefc460204a0c62eacc8b79464438f8b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
