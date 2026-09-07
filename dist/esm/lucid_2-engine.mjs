export const name="lucid_2-engine";
export const id="dl_b228840a3f5e4bcf9892";
export const url=new URL("../icons/lucid_2-engine.svg?v=9323128942e723b5cb706fbebbc6e21c0b81b7117c453024c835fccb6765db74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
