export const name="conversion_path";
export const id="dl_ea650fd6028aa8a7a346";
export const url=new URL("../icons/conversion_path.svg?v=a5f4be47d6cd027eabfb6d772e36561d592e4b90d1af4dd1a0928317f54fc029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
