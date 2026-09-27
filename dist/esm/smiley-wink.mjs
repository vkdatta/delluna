export const name="smiley-wink";
export const id="dl_af16f1daa7f76d196cde";
export const url=new URL("../icons/smiley-wink.svg?v=d13fd9000f3d2336a5a0ea0e4cd5c1f394ae7d4fb5f2263ddc89cf36329aa421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
