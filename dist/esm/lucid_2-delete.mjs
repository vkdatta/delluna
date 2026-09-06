export const name="lucid_2-delete";
export const id="dl_fe21c95d493f4965aae3";
export const url=new URL("../icons/lucid_2-delete.svg?v=d007747b04dd5214f7bea6628eb9477984bdd73ab63136da8d75511e7e1e86f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
