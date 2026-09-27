export const name="lucid_2-dot";
export const id="dl_4913e895bf24418b8cb2";
export const url=new URL("../icons/lucid_2-dot.svg?v=c6754c66a44e6b10bd85698035cd2340dbcbd3e9c476470236deab13aa41ed46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
