export const name="lucid_1-badge-check";
export const id="dl_5da655184fd24e8d973c";
export const url=new URL("../icons/lucid_1-badge-check.svg?v=44512ec054b24763785101a890e3057f5ece187c7aedc12aa23e8803862666b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
