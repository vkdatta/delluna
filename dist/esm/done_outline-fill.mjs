export const name="done_outline-fill";
export const id="dl_9adfea2f79f4614af8b4";
export const url=new URL("../icons/done_outline-fill.svg?v=862fd67fa3c12e6912a36ee2a5f7beb943a0c08c3a8dbb1e2f830bbbd649870e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
