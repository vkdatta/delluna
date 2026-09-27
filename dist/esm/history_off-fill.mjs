export const name="history_off-fill";
export const id="dl_daf86ead66de424b6695";
export const url=new URL("../icons/history_off-fill.svg?v=bed29d82ef7e109cd0cfb929d26d39ac8b52b40e1d6f0eff821b7e310eeff7ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
