export const name="images-fill";
export const id="dl_b48446d72a964cf7b8f7";
export const url=new URL("../icons/images-fill.svg?v=84047d95a7637e632d15f5fec9478d11733873af0e8edb274cf744f60383a1f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
