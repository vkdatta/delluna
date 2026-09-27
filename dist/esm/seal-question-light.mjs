export const name="seal-question-light";
export const id="dl_ceba73b344b9e95312e3";
export const url=new URL("../icons/seal-question-light.svg?v=83c4d0a26ad0e014f10d898ef7d9d90915fe075aaf288735a0f64bdc5bc0038b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
