export const name="lucid_1-cake-slice";
export const id="dl_2b7379ab5f57471d94c5";
export const url=new URL("../icons/lucid_1-cake-slice.svg?v=b347a868d241b08d8c9de96928b89f04f8ba08b4be76b0e264593bf0933f1483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
