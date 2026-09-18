export const name="person";
export const id="dl_57ec802ce93569710a00";
export const url=new URL("../icons/person.svg?v=830dcd0a9c147812ad992cd46bda42146e7394bfef96d8a6eef3b4f3213613cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
