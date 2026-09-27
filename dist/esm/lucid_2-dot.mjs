export const name="lucid_2-dot";
export const id="dl_4913e895bf24418b8cb2";
export const url=new URL("../icons/lucid_2-dot.svg?v=3896b0f8f3562eb371e6b342ce0dffa143275576443d7f0b55bb85b8b2e404e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
