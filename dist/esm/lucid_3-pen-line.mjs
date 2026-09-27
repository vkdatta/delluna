export const name="lucid_3-pen-line";
export const id="dl_35624e25db8c4b0d8561";
export const url=new URL("../icons/lucid_3-pen-line.svg?v=d410835700e664e60c777ae22dd1ffe3bb4c17078a7612b9fc98c67687a77c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
