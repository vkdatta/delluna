export const name="tab-fill";
export const id="dl_67cbbde782d6b0e09ac2";
export const url=new URL("../icons/tab-fill.svg?v=a5b71130419a2655f44ada36829c63e1efce5945bcf56a3c2f1b80db50c2561d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
