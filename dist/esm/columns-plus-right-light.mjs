export const name="columns-plus-right-light";
export const id="dl_bde6d3dedfce42f5a998";
export const url=new URL("../icons/columns-plus-right-light.svg?v=0a56442c42e2ab88ef7ae763f50c4aa4ecad969cec39f31d2512ab03f4302b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
