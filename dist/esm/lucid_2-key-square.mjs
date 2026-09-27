export const name="lucid_2-key-square";
export const id="dl_d6085ec4c2244979a5f2";
export const url=new URL("../icons/lucid_2-key-square.svg?v=967c8448a24a228edbda532e28df2476fe6aeab8a42d9616116ce74a18cfa028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
