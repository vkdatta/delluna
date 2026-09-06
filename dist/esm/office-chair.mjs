export const name="office-chair";
export const id="dl_9bbbd9b3119b4e74ba96";
export const url=new URL("../icons/office-chair.svg?v=293a07a81c4fd2b170f601c74cebf42b37a2076b80843098d2be43be468b1cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
