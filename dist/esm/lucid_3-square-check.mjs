export const name="lucid_3-square-check";
export const id="dl_65a2435f246e45c595bc";
export const url=new URL("../icons/lucid_3-square-check.svg?v=8eabc483c6a78949edbf1a860d607c333a4f845f819d9ee8f3e29c1e94a4160e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
