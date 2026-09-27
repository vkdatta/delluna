export const name="lucid_3-share-2";
export const id="dl_dd3e4e94c5a0404cb415";
export const url=new URL("../icons/lucid_3-share-2.svg?v=e4f8bc44eee5a454d51ae94348e569a7dd9dbdbb3aef03f615455a7d0ef09146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
