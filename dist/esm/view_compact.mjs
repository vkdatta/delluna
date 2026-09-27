export const name="view_compact";
export const id="dl_ec1872843f99bb3397a9";
export const url=new URL("../icons/view_compact.svg?v=3f91a865ba3d1441539f9bad9137c66962f1c5f21aa574fda89f137e93ed833d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
