export const name="lucid_3-shield-half";
export const id="dl_0272d290ea414b918489";
export const url=new URL("../icons/lucid_3-shield-half.svg?v=4dc94edcebbd12d5a5f503c26945202dedfc51a030ee16272e495c01334dc88f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
