export const name="file_export";
export const id="dl_02da7b06d7b72e801a86";
export const url=new URL("../icons/file_export.svg?v=29e1adf80df409898c64755793c9578f3244f39331405895ad25c4e616bf8219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
