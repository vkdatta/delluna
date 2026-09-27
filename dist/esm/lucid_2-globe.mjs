export const name="lucid_2-globe";
export const id="dl_82e1157dbb0e4efe929a";
export const url=new URL("../icons/lucid_2-globe.svg?v=d7f8ab7bc333fa2ddfd35e5ea4a590209c9ba239a4a7c1e85e41c3579404c73c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
