export const name="lucid_2-corner-up-right";
export const id="dl_5301c6d5fa4e40498021";
export const url=new URL("../icons/lucid_2-corner-up-right.svg?v=7bd54d85a7e66451cf99097d47c0b865ad1bc58405fe643f7d92c179ebe52f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
