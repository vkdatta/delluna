export const name="file-dashed-bold";
export const id="dl_7e97c989a3e649db9d51";
export const url=new URL("../icons/file-dashed-bold.svg?v=aed95d672d654c30cc66289f8e6e14abf892d3aed49d22bd9dd4ec1bc87bb574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
