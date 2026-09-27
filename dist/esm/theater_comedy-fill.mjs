export const name="theater_comedy-fill";
export const id="dl_42faaba2f547a3c6162d";
export const url=new URL("../icons/theater_comedy-fill.svg?v=76280e810415045343f003f7f403a0c6ed4a6db47511332ed052a4af7e8afb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
