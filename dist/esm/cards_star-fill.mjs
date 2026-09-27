export const name="cards_star-fill";
export const id="dl_90f4bbdc589880c0e0bb";
export const url=new URL("../icons/cards_star-fill.svg?v=86f5c6366ef217fbe155ae9922d60d57ca71cd5c6951180fb7b5c11b5900e044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
