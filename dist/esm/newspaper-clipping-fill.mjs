export const name="newspaper-clipping-fill";
export const id="dl_8ea6e601977545f68566";
export const url=new URL("../icons/newspaper-clipping-fill.svg?v=e294e94d7be692a3c0d76a090cbf015ba2b7cbea47964db40ed48208c1c32c81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
