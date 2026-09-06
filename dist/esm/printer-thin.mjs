export const name="printer-thin";
export const id="dl_b1959d30d5ac45bb9548";
export const url=new URL("../icons/printer-thin.svg?v=bf87cfc8aabbb54a26d8c3ec140bb07ca4bbf0efa59a5daa84d2e25ba907c098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
