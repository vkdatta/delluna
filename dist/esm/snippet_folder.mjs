export const name="snippet_folder";
export const id="dl_d96468021b0c51e71ad9";
export const url=new URL("../icons/snippet_folder.svg?v=3114a1d1b33e113498772d6974ca50d2306000fe8ecb9ba969200332d35d0046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
