export const name="lucid_1-bridge";
export const id="dl_0b9a86ee9ffe46788e89";
export const url=new URL("../icons/lucid_1-bridge.svg?v=200267a90e07f8008b5e8fe28faa0bcae723240350bdd6c1080999dc1ef3f24c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
