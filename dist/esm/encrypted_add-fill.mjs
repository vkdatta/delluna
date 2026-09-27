export const name="encrypted_add-fill";
export const id="dl_823b2b00ec6385d2382a";
export const url=new URL("../icons/encrypted_add-fill.svg?v=05019ede443b1cd25d321cc8e64ae7cc9e3888eeb18009f327ed600bd523612d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
