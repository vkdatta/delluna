export const name="funicular-fill";
export const id="dl_db5d0ff6c8fd45fd5ec0";
export const url=new URL("../icons/funicular-fill.svg?v=2bd4d03c4cf9bdd93e36e411f47b1bc6e8af8285ba1ce6e9e829c87c00a94b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
