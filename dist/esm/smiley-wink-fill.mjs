export const name="smiley-wink-fill";
export const id="dl_6ee93664cbbd4617a786";
export const url=new URL("../icons/S/smiley-wink-fill.svg?v=fe39123c930a66c4b97ab507f631bb0e4424fa6a049921f6f201ca1135f404ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
