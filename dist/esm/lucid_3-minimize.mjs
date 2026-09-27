export const name="lucid_3-minimize";
export const id="dl_73f8f3ea83d44494a2ce";
export const url=new URL("../icons/lucid_3-minimize.svg?v=0b60a052ef7b5f797d5ed1be916151a1b5f9cf69c54f56a2f7cfba7ce09619c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
