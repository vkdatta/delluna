export const name="tire-fill";
export const id="dl_6c59f222c0a87de3dd24";
export const url=new URL("../icons/tire-fill.svg?v=271321a83b1fc70a0ba5d2e406f7ae3a947c3eadda749d35be4db6551dfff41a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
