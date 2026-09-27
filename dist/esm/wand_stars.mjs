export const name="wand_stars";
export const id="dl_93962e40c629b7d8c2be";
export const url=new URL("../icons/wand_stars.svg?v=bac534a7d8d314bca542d6e054669f6ed3db3e4657b9ed8ee0c44e20c267840d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
