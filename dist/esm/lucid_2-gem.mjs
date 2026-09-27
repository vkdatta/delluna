export const name="lucid_2-gem";
export const id="dl_305910eccb354f089d79";
export const url=new URL("../icons/lucid_2-gem.svg?v=917bf1ba2a7502b6b882c79f528f02c9e4368c7b31c02f61226a1778741145ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
