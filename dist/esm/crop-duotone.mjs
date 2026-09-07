export const name="crop-duotone";
export const id="dl_a84c9750cf7f4c219f4d";
export const url=new URL("../icons/crop-duotone.svg?v=c984b4135e3ecf587146c75ee3c4d54abb565241a655c14f314d9ba519a4494f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
