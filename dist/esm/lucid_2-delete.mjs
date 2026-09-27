export const name="lucid_2-delete";
export const id="dl_fe21c95d493f4965aae3";
export const url=new URL("../icons/lucid_2-delete.svg?v=3aa298637da691a89a0892b924cab15aecf3acd602859bc344b99b4d45c6ec6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
