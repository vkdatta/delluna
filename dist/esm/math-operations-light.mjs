export const name="math-operations-light";
export const id="dl_8220a90bf71b4ca68dc8";
export const url=new URL("../icons/math-operations-light.svg?v=e4ef5b9a32ce37fd3b50319f18b6bd02ae5c3a28d95dee8dbb4b32d6106025cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
