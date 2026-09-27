export const name="sync";
export const id="dl_2a17f7dfed94eb6570a5";
export const url=new URL("../icons/sync.svg?v=23acacdfa2e167a605c35a2af0e1547777c4e7c298be488a12e739c9860dbf34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
