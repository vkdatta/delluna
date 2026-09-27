export const name="baseball-duotone";
export const id="dl_d1d91458247e45a4aa7f";
export const url=new URL("../icons/baseball-duotone.svg?v=6fae62f60195bc0429a1ff870aee5ffca6d0dc414eb09236d837890ee8093cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
