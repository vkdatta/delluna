export const name="waves-horizontal";
export const id="dl_99504ee65e1d456e892a";
export const url=new URL("../icons/waves-horizontal.svg?v=1a42e2235c0ce55e1be6107fc10fb73bb9e70301192a1b574d62d95b5fdd9d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
