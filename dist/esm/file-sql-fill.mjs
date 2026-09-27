export const name="file-sql-fill";
export const id="dl_52594280142b4570a774";
export const url=new URL("../icons/file-sql-fill.svg?v=c7eb31482558650daf57b47e36f27847dac283e5065dfc7d19b96ef2cb957582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
