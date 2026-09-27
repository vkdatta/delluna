export const name="highlighter_size_5-fill";
export const id="dl_af13d422f1de8c75e13c";
export const url=new URL("../icons/highlighter_size_5-fill.svg?v=6ef5b6eb52d8ba3a438326a209bf70c6a7c9bc60ccbc6ca44194124cd2e7af5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
