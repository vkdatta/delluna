export const name="images-square-bold";
export const id="dl_092ba507d79241c49234";
export const url=new URL("../icons/images-square-bold.svg?v=bcc7b344bc11f9398f5f8a90840d573dd046aac6d6efcf161df13d2c40116304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
