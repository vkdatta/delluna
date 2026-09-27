export const name="fort";
export const id="dl_9a1a54d66765d9d10da2";
export const url=new URL("../icons/fort.svg?v=e8d6b7843e30ddf20efd4307c4d2f893fd15eb1611e0f70597b6ef72d43b57a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
