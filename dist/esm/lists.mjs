export const name="lists";
export const id="dl_5355ce87a86e203e257d";
export const url=new URL("../icons/lists.svg?v=b208363876e7d5e61fce6ca223a1e9f159dc6631968c7da9a0353aae3cd65b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
