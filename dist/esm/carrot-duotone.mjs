export const name="carrot-duotone";
export const id="dl_454a9675b89d4fdf8c4b";
export const url=new URL("../icons/carrot-duotone.svg?v=791f861ab9d5c4236ef8a09e7e1879a5c73a27d0f39e371d9c40230c108a5316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
