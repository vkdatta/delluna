export const name="cooking-pot-duotone";
export const id="dl_2bb9e6a9305b45cf9c3d";
export const url=new URL("../icons/cooking-pot-duotone.svg?v=f03751c97eb86550de06242db61e21f400051cb59d2fd6f26b25ae9d1a86ee14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
