export const name="seal";
export const id="dl_a2d62127800393f27ebb";
export const url=new URL("../icons/seal.svg?v=8411aef6e7fd1411c0b41cdd5b169664715daae438ae41a8a41dd2d620d6bb18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
