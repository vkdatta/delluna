export const name="math-operations-light";
export const id="dl_8220a90bf71b4ca68dc8";
export const url=new URL("../icons/math-operations-light.svg?v=1eeaed43468014a8103d98c6f67d4221c4a27fb4387f8036ad7c15fcb5705aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
