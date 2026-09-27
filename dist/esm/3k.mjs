export const name="3k";
export const id="dl_3a89abab56e71977bdfe";
export const url=new URL("../icons/3k.svg?v=fe0c2baeff2accfec636aa456f17af605d7ba52a8f44e0455f5582751e630bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
