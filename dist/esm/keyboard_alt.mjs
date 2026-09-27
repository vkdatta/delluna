export const name="keyboard_alt";
export const id="dl_cf0beda9065f81ab8530";
export const url=new URL("../icons/keyboard_alt.svg?v=0361f5f3cd2642c19183594f38095e59c0dd18482d1cb0cbc9c2acc8c96448a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
