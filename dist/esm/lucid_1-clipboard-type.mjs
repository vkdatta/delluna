export const name="lucid_1-clipboard-type";
export const id="dl_9d6e3ec14e8d4949a1c4";
export const url=new URL("../icons/lucid_1-clipboard-type.svg?v=12308811aa2300dfa0a1041396aabf24c4937d028bbc1fcad16314832d7c20dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
