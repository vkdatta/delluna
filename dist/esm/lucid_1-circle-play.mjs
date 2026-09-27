export const name="lucid_1-circle-play";
export const id="dl_c129d1df63ac41b99df1";
export const url=new URL("../icons/lucid_1-circle-play.svg?v=97b3491a19d80492e639346753f31f661a641bff60232b799131cf5f395a02fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
