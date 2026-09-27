export const name="hand-heart-duotone";
export const id="dl_a534e690e07b477fb192";
export const url=new URL("../icons/hand-heart-duotone.svg?v=86cbf0af865e98906424a49769933b331285fbc96673b50434662137b22b17a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
