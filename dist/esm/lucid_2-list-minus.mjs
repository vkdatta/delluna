export const name="lucid_2-list-minus";
export const id="dl_06c6806e1353495bbbc5";
export const url=new URL("../icons/lucid_2-list-minus.svg?v=f74232a98d4b5629d2a1555417ead00d9e9f0559aa3c945a16b5b76b89f39e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
