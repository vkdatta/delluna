export const name="siren_open";
export const id="dl_fb02c072abd6f1a7b1a3";
export const url=new URL("../icons/siren_open.svg?v=9e91042c2f36b0c4ea780476ee58896e40006dd9cce010404f4392a342571356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
