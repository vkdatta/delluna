export const name="difference";
export const id="dl_62f99a1e02da16ee4da6";
export const url=new URL("../icons/difference.svg?v=65e1f6119490c5aade0918c17c00893031d6959146d5c0c867ab519e9604a887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
