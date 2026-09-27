export const name="lucid_3-settings-2";
export const id="dl_261e8ca4d8694f8b9520";
export const url=new URL("../icons/lucid_3-settings-2.svg?v=c0d9b3be6e59fe4b0407493f12b93ffbe1477dfb85c84fd69015ca54cec0cce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
