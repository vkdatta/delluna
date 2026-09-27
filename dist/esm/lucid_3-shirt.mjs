export const name="lucid_3-shirt";
export const id="dl_e877aaa23e824a25ba3a";
export const url=new URL("../icons/lucid_3-shirt.svg?v=910a224da3688c1e2a9075130471b0737956c2e61333f434df7c9b1da5485578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
