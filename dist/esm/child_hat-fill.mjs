export const name="child_hat-fill";
export const id="dl_c60e95a210d44648bfd2";
export const url=new URL("../icons/C/child_hat-fill.svg?v=130f8447d62cc047b6ce3f10b36124d53d0c8a47529c5475d4b6412feffa0377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
